/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import {
  cleanData
} from "/assets/js/charts/lib/gantt-cleanData.js"
import {
  categories
} from "/assets/js/charts/lib/gantt-categories.js"

// require('dotenv').config()

// let cleanData = process.env.ganttData
// let categories = process.env.ganttCategories

(function init() {

  let w = 11000;
  let h = 700;
  var svg = d3
    .selectAll(".svg")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("class", "svg");

  // functie om over de data heen te loopen en iedere aanwezige datum een categorical label te geven zodat we ipv een time scale een ordinal scale kan worden gebruikt
 
  var dateFormat = d3.time.format("%Y-%m-%d %H:%M");

  var timeScale = d3.time
    .scale()
    .domain([
      d3.min(cleanData, function (d) {
        return dateFormat.parse(d.dateTimeStart);
      }),
      d3.max(cleanData, function (d) {
        return dateFormat.parse(d.dateTimeEnd);
      })
    ])
    .range([0, w - 150]);


  makeGant(cleanData, w, h);

  var title = svg
    .append("text")
    .text("Gantt Chart Process")
    .attr("x", w / 2)
    .attr("y", 25)
    .attr("text-anchor", "middle")
    .attr("font-size", 18)
    .attr("fill", "#009FFC");

  function makeGant(theArray, pageWidth, pageHeight) {
    var barHeight = 20;
    var gap = barHeight + 4;
    var topPadding = 75;
    var sidePadding = 75;


    var colorScale = d3.scale
      .linear()
      .domain([0, categories.length])
      .range(["#00B9FA", "#F95002"])
      .interpolate(d3.interpolateHcl);

    makeGrid(sidePadding, topPadding, pageWidth, pageHeight);
    drawRects(
      theArray,
      gap,
      topPadding,
      sidePadding,
      barHeight,
      colorScale,
      pageWidth,
      pageHeight
    );
    vertLabels(gap, topPadding, sidePadding, barHeight, colorScale);
  }

  function drawRects(
    theArray,
    theGap,
    theTopPad,
    theSidePad,
    theBarHeight,
    theColorScale,
    w,
    h
  ) {
    // eslint-disable-next-line no-unused-vars
    var bigRects = svg
      .append("g")
      .selectAll("rect")
      .data(theArray)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", function (d, i) {
        const isType = (element) => element == d.type;
        let categoryIndex = categories.findIndex(isType);
        d.categoryIndex = categoryIndex;
        return d.categoryIndex * theGap + theTopPad - 2;
      })
      .attr("width", function (d) {
        return w - theSidePad / 2;
      })
      .attr("height", theGap)
      .attr("stroke", "none")
      .attr("fill", function (d) {
        for (var i = 0; i < categories.length; i++) {
          if (d.type == categories[i]) {
            const isType = (element) => element == d.type;
            let categoryIndex = categories.findIndex(isType);
            d.categoryIndex = categoryIndex;

            return d3.rgb(theColorScale(categoryIndex));
          }
        }
      })
      .attr("opacity", 0.05);

    var rectangles = svg.append("g").selectAll("rect").data(theArray).enter();


    var innerRects = rectangles
      .append("rect")
      .attr("rx", 3)
      .attr("ry", 3)
      .attr("x", function (d) {
        return timeScale(dateFormat.parse(d.dateTimeStart)) + theSidePad; // reduce day to 8 hours instead of 24
      })
      .attr("y", function (d, i) {
        // dat moet corresponderen met de array position van de category
        return d.categoryIndex * theGap + theTopPad
      })
      .attr("width", function (d) {
        return (
          (timeScale(dateFormat.parse(d.dateTimeEnd)) -
            timeScale(dateFormat.parse(d.dateTimeStart))) *
          3 // aantal uur (kan dat niet naar 7/8 uur gedaan worden als breuk?) 4 van de 8 uur == 12 uur in de graph? ?
        );
      })
      .attr("height", theBarHeight)
      .attr("stroke", function (d) {
        for (var i = 0; i < categories.length; i++) {
          if (d.type == categories[i]) {
            let rgbObject = d3.rgb(theColorScale(d.categoryIndex)).darker()
            let rgbFormat = 'rgb(' + rgbObject.r + ',' + rgbObject.g + ',' + rgbObject.b + ')'
            return (rgbFormat)
          }
        }
      })
      .attr("fill", function (d) {
        for (var i = 0; i < categories.length; i++) {
          if (d.type == categories[i]) {
            return d3.rgb(theColorScale(d.categoryIndex));
          }
        }
      })

    var rectText = rectangles
      .append("text")
      .text(function (d) {
        return d.time;
      })
      .attr("x", function (d) {
        return (
          (timeScale(dateFormat.parse(d.dateTimeEnd)) -
            timeScale(dateFormat.parse(d.dateTimeStart))) /
          2 +
          timeScale(dateFormat.parse(d.dateTimeStart)) +
          theSidePad
        );
      })
      .attr("y", function (d, i) {
        return d.categoryIndex * theGap + 14 + theTopPad;
      })
      .attr("font-size", 11)
      .attr("text-anchor", "left")
      .attr("text-height", theBarHeight)
      .attr("fill", "#000");

      
    rectText
      .on("mouseover", function (e) {
        var tag = "";
        // add cursor-default class
        d3.select(this).classed("cursor-default", true);

        tag = filterTag(d3.select(this).data()[0]);

        var output = document.getElementById("tag");

        var x = this.x.animVal.getItem(this) + "px";
        var y = this.y.animVal.getItem(this) + 25 + "px";

        output.innerHTML = tag;
        output.style.top = y;
        output.style.left = x;
        output.style.display = "block";
      })
      .on("mouseout", function () {
        var output = document.getElementById("tag");
        output.style.display = "none";
      });

    innerRects
      .on("mouseover", function (e) {
        var tag = "";

        d3.select(this).classed("cursor-default", true) // add cursor-default class

        // if (d3.select(this).data()[0].details != undefined) {
        tag = filterTag(d3.select(this).data()[0]);
        // }

        var output = document.getElementById("tag");

        var x = this.x.animVal.value + this.width.animVal.value / 2 + "px";
        var y = this.y.animVal.value + 25 + "px";

        output.innerHTML = tag;
        output.style.top = y;
        output.style.left = x;
        output.style.display = "block";
      })
      .on("mouseout", function () {
        var output = document.getElementById("tag");
        output.style.display = "none";
      });
  }

  function filterTag(data) {
    let tag = ""

    let unit = checkPlural(data.time)

    if (data.details != undefined) {
      return tag =
        "Task: " +
        data.task +
        "<br/>" +
        "Type: " +
        data.type +
        "<br/>" +
        "Category: " +
        data.category +
        "<br/>" +
        "Person: " +
        data.person +
        "<br/>" +
        "Date: " +
        data.date +
        "<br/>" +
        "Time: " +
        data.time + " " + unit +
        "<br/>" +
        "Details: " +
        data.details;
    } else {
      return tag =
        "Task: " +
        data.task +
        "<br/>" +
        "Type: " +
        data.type +
        "<br/>" +
        "Category: " +
        data.category +
        "<br/>" +
        "Person: " +
        data.person +
        "<br/>" +
        "Date: " +
        data.date +
        "<br/>" +
        "Time: " +
        data.time + " " + unit
    }
  }

  function checkPlural(hours) {
    if (hours == 1) {
      return "hour";
    } else {
      return "hours";
    }
  }

  function makeGrid(theSidePad, theTopPad, w, h) {
    var xAxis = d3.svg
      .axis()
      .scale(timeScale)
      .orient("top")
      .ticks(d3.time.days, 1)
      // .outerTickSize(0)
      .tickFormat(d3.time.format("%d %b")) // '1 Jan'
      
      .tickSize(h - theTopPad - 80, 0, 0) //   // 2900 - theTopPad - 80 etc

      // tickFormat(function(d) {
      //   var hours;
      //   hours = d.getHours();
      //   if (hours === 6) {
      //     // font awesome's sun icon
      //     return 'yeet';
      //   } else if (hours === 18) {
      //     // font awesome's moon icon
      //     return 'eske';
      //   } else {
      //     // don't label anything else
      //     return null;
      //   }
      // })


    var grid = svg
      .append("g")
      .attr("class", "grid")
      .attr("transform", "translate(" + theSidePad + ", " + (h - 110) + ")") // afstand x-as tov svg
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "middle")
      .attr("fill", "#000") // text
      .attr("stroke", "none")
      .attr("font-size", 10)
      .attr("dy", "1em");
  }

  function vertLabels(
    theGap,
    theTopPad,
    theSidePad,
    theBarHeight,
    theColorScale
  ) {
    var numOccurances = new Array();
    var prevGap = 0;

    for (var i = 0; i < categories.length; i++) {
      // hier? d.categoryIndex  -->. vind hier uit hoe je d. kunt aanroepen
      // console.log('categories[i]: ' + categories[i] + '  ' + 'catsUnfiltered: ' + catsUnfiltered);
      // console.log('getcount: ' + getCount(categories[i]));
      // console.log(catsUnfiltered)
      // console.log("i:  " + i);
      // numOccurances[i] = [categories[i], getCount(categories[i], catsUnfiltered)];
      numOccurances[i] = [categories[i], 1];

      // console.log('numOccurances: ' + numOccurances)
      // console.log("numOccurances[i]: " + numOccurances[i]);
    }

    var axisText = svg
      .append("g") //without doing this, impossible to put grid lines behind text
      .selectAll("text")
      .data(numOccurances)
      .sort(function (a, b) {
        // if (sortOrder) {
        //   return d3.descending(a.days, b.days);
        // } else {
        // console.log(d3.ascending(a.type, b.type))
        return d3.ascending(a.type, b.type) // does this work?? mss is hetalleen on action oid --> je kan ook gewoon  numocc zelf sorten met een losse functie
        // }
      })
      .enter()
      .append("text")
      .text(function (d) {
        // console.log(d)
        return d[0]
      })
      // sort text alphabetically

      .attr("x", 10)
      .attr("y", function (d, i) {
        if (i > 0) {
          for (var j = 0; j < i; j++) {
            // console.log("prevGap: " + prevGap);

            prevGap += numOccurances[i - 1][1];
            // console.log('prevGap: ' + prevGap);
            return (d[1] * theGap) / 2 + prevGap * theGap + theTopPad;
          }
        } else {
          return (d[1] * theGap) / 2 + theTopPad;
        }
      })
      .attr("font-size", 11)
      .attr("text-anchor", "start")
      .attr("text-height", 14)
      .attr("fill", function (d) {
        for (var i = 0; i < categories.length; i++) {
          if (d[0] == categories[i]) {
            //  console.log("true!");
            return d3.rgb(theColorScale(d.categoryIndex)).darker();
          }
        }
      });
  }


  //from this stackexchange question: http://stackoverflow.com/questions/14227981/count-how-many-strings-in-an-array-have-duplicates-in-the-same-array
  function getCounts(arr) {
    var i = arr.length, // var to loop over
      obj = {}; // obj to store results
    while (i) obj[arr[--i]] = (obj[arr[i]] || 0) + 1; // count occurrences
    return obj;
  }

  // get specific from everything
  function getCount(word, arr) {
    return getCounts(arr)[word] || 0;
  }
})()

