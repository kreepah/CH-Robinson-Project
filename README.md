# CH-Robinson-Project

**Author: Kripa Gurung**

*Project URL: [explorationpeak](https://explorationpeak.000webhostapp.com/)*

This project is for the CH Robinson HatCHRy Jan-2021 interview process. It uses HTML5 and Javascript to create a simple webpage where a user can enter a country code and get the route from USA to that country displayed. The website is hosted via [000webhostapp](https://www.000webhost.com/). The HTML file has been verified using W3C Markup. The project has been tested on Google Chrome and Microsoft Edge.

For input, the country codes are:

USA : United States of America

CAN : Canada

MEX : Mexico

BLZ : Belize

GTM : Guatemala

SLV : El Salvador

HND : Honduras

NIC : Nicaragua

CRI : Costa Rica

PAN : Panama

### Code specifications:
* The countries are represented as an undirected graph.
* Breadth First Search is used to find the shortest path from USA to destination country using the number of edges.
* Input verification is done to make sure user input is a valid country code.

### Assumptions:
* Since only the destination country was to be inputted, the source country has been hard-coded to be USA. Code can be modified to accomodate if needed for a different source country.
* Time complexity is not being deeply considered. Since the given scenario is simple, BFS should suffice.
* When input destination is the same as source, source is printed i.e. for "USA", output is "USA".
* The website is being hosted for free due to which the domain name is not custom.

### Resources used:
* Stack Overflow
* w3 Schools
