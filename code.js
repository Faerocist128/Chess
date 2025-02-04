

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["cd9490c9-d3e1-4a3b-b630-27edca8d3972","3fcdca0b-5a77-4b8b-90b8-b3e2300d772c","4aeefb32-ddaa-45dd-b4d4-52783a053521","9b8ca7a9-404f-471a-8e3e-a26735bd44c5","391dc926-caf3-43e2-93af-507491ecb1ff","bc6321e4-3168-408a-819f-a334ab20c0d5","b315c410-c9e0-4283-b0e8-9ad5ec4e589d","953eb388-9742-41d9-830d-be62c3a5de27","1dab9f93-d4a2-4fe6-8796-8e5f3377ea53","1128b88c-1a6c-4a6f-ac74-fa2628c89d66","0283a433-c677-42e7-b071-5b3005833031","784795a5-2e6a-481f-9c8e-75e8f0278fc0","b90702ae-e9ae-4da4-a867-6f1150fcf80a","afda1f3b-791c-40f2-8ac7-ab1ac4140018"],"propsByKey":{"cd9490c9-d3e1-4a3b-b630-27edca8d3972":{"name":"white-pawn","sourceUrl":null,"frameSize":{"x":18,"y":26},"frameCount":1,"looping":true,"frameDelay":12,"version":"qz87EH0dLKNXjs4PCAkluiW7fdCxK9GI","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":18,"y":26},"rootRelativePath":"assets/cd9490c9-d3e1-4a3b-b630-27edca8d3972.png"},"3fcdca0b-5a77-4b8b-90b8-b3e2300d772c":{"name":"black-pawn","sourceUrl":null,"frameSize":{"x":18,"y":26},"frameCount":1,"looping":true,"frameDelay":12,"version":"rz7PKSHMDYpkTK_rqgYUXl9p2U2v550m","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":18,"y":26},"rootRelativePath":"assets/3fcdca0b-5a77-4b8b-90b8-b3e2300d772c.png"},"4aeefb32-ddaa-45dd-b4d4-52783a053521":{"name":"white-rook","sourceUrl":null,"frameSize":{"x":20,"y":27},"frameCount":1,"looping":true,"frameDelay":12,"version":"9XU6YRE9uR9vge5ef2_lzkhaJmuAfUjC","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":27},"rootRelativePath":"assets/4aeefb32-ddaa-45dd-b4d4-52783a053521.png"},"9b8ca7a9-404f-471a-8e3e-a26735bd44c5":{"name":"black-rook","sourceUrl":null,"frameSize":{"x":20,"y":27},"frameCount":1,"looping":true,"frameDelay":12,"version":"B1Y58b8ws9FUWWbpw6Ziwny5D.gqGxLf","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":27},"rootRelativePath":"assets/9b8ca7a9-404f-471a-8e3e-a26735bd44c5.png"},"391dc926-caf3-43e2-93af-507491ecb1ff":{"name":"white-king","sourceUrl":null,"frameSize":{"x":26,"y":27},"frameCount":1,"looping":true,"frameDelay":12,"version":"eMtqiC494VA7L0D6xMiIcRi8E3h6D5mW","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":26,"y":27},"rootRelativePath":"assets/391dc926-caf3-43e2-93af-507491ecb1ff.png"},"bc6321e4-3168-408a-819f-a334ab20c0d5":{"name":"black-king","sourceUrl":null,"frameSize":{"x":26,"y":27},"frameCount":1,"looping":true,"frameDelay":12,"version":"4hQTCWEZC74CE5ErK.nG.u6LkCNmUHOu","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":26,"y":27},"rootRelativePath":"assets/bc6321e4-3168-408a-819f-a334ab20c0d5.png"},"b315c410-c9e0-4283-b0e8-9ad5ec4e589d":{"name":"white-bishop","sourceUrl":null,"frameSize":{"x":20,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"M3t7GsX.yGfYZ0wNKAl75OkC.Gyz1tHz","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":28},"rootRelativePath":"assets/b315c410-c9e0-4283-b0e8-9ad5ec4e589d.png"},"953eb388-9742-41d9-830d-be62c3a5de27":{"name":"black-bishop","sourceUrl":null,"frameSize":{"x":20,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"lkQ8mi0nfcv6wlx57ua8gXxTs5p.EWs9","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":28},"rootRelativePath":"assets/953eb388-9742-41d9-830d-be62c3a5de27.png"},"1dab9f93-d4a2-4fe6-8796-8e5f3377ea53":{"name":"white-queen","sourceUrl":null,"frameSize":{"x":28,"y":27},"frameCount":1,"looping":true,"frameDelay":12,"version":"FWjfifKZlDxdmlzEiow6w5Y7YltuKDw5","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":28,"y":27},"rootRelativePath":"assets/1dab9f93-d4a2-4fe6-8796-8e5f3377ea53.png"},"1128b88c-1a6c-4a6f-ac74-fa2628c89d66":{"name":"black-queen","sourceUrl":null,"frameSize":{"x":28,"y":27},"frameCount":1,"looping":true,"frameDelay":12,"version":"syRy1nttnm0bW7vPKZlC9zpvEUazq6Ti","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":28,"y":27},"rootRelativePath":"assets/1128b88c-1a6c-4a6f-ac74-fa2628c89d66.png"},"0283a433-c677-42e7-b071-5b3005833031":{"name":"chessboard","sourceUrl":null,"frameSize":{"x":97,"y":88},"frameCount":1,"looping":true,"frameDelay":12,"version":"TEuAWnF.zprDK0.8YQuNBIDTbFZ.J2Ih","loadedFromSource":true,"saved":true,"sourceSize":{"x":97,"y":88},"rootRelativePath":"assets/0283a433-c677-42e7-b071-5b3005833031.png"},"784795a5-2e6a-481f-9c8e-75e8f0278fc0":{"name":"white-knight","sourceUrl":null,"frameSize":{"x":20,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"Nzwwe2ADSQ4hRT1A7KndWKcMFIUNIDrR","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":28},"rootRelativePath":"assets/784795a5-2e6a-481f-9c8e-75e8f0278fc0.png"},"b90702ae-e9ae-4da4-a867-6f1150fcf80a":{"name":"black-knight","sourceUrl":null,"frameSize":{"x":20,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"ec2RHcoXIDMEZo.lq2f3bZBRB493ZSC0","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":28},"rootRelativePath":"assets/b90702ae-e9ae-4da4-a867-6f1150fcf80a.png"},"afda1f3b-791c-40f2-8ac7-ab1ac4140018":{"name":"pawn-pass","sourceUrl":null,"frameSize":{"x":44,"y":156},"frameCount":1,"looping":true,"frameDelay":12,"version":"X6GgPp6KLXFoMU1lClmAkHigTFIVWMbu","loadedFromSource":true,"saved":true,"sourceSize":{"x":44,"y":156},"rootRelativePath":"assets/afda1f3b-791c-40f2-8ac7-ab1ac4140018.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

World.frameRate = 60;

//CHESSBOARD
var chessboard = createSprite(200,200);
chessboard.setAnimation("chessboard");
chessboard.scale = 3.5;

//WHITEPIECES
var whitepawn1 = createSprite(55,298);//PAWN1
whitepawn1.setAnimation("white-pawn");

var whitepawn2 = createSprite(97.4375,298);//PAWN2
whitepawn2.setAnimation("white-pawn");

var whitepawn3 = createSprite(139.875,298);//PAWN3
whitepawn3.setAnimation("white-pawn");

var whitepawn4 = createSprite(182.3125,298);//PAWN4
whitepawn4.setAnimation("white-pawn");

var whitepawn5 = createSprite(224.75,298);//PAWN5
whitepawn5.setAnimation("white-pawn");

var whitepawn6 = createSprite(267.1875,298);//PAWN6
whitepawn6.setAnimation("white-pawn");

var whitepawn7 = createSprite(309.625,298);//PAWN7
whitepawn7.setAnimation("white-pawn");

var whitepawn8 = createSprite(348.5,298);//PAWN8
whitepawn8.setAnimation("white-pawn");

var whiterook1 = createSprite(55,333);//ROOK1
whiterook1.setAnimation("white-rook");

var whiterook2 = createSprite(348.5,333);//ROOK2
whiterook2.setAnimation("white-rook");

var whitebishop1 = createSprite(139.875,333);//BISHOP1
whitebishop1.setAnimation("white-bishop");

var whitebishop2 = createSprite(267.1875,333);//BISHOP2
whitebishop2.setAnimation("white-bishop");

var whiteknight1 = createSprite(97.4375,333);//KNIGHT1
whiteknight1.setAnimation("white-knight");

var whiteknight2 = createSprite(309.625,333);//KNIGHT2
whiteknight2.setAnimation("white-knight");


var whitequeen = createSprite(182.3125,333);//QUEEN
whitequeen.setAnimation("white-queen");

var whiteking = createSprite(224.75,333);//KING
whiteking.setAnimation("white-king");

//BLACK PIECES
var blackpawn1 = createSprite(55,108);//PAWN1
blackpawn1.setAnimation("black-pawn");

var blackpawn2 = createSprite(97.4375,108);//PAWN2
blackpawn2.setAnimation("black-pawn");

var blackpawn3 = createSprite(139.875,108);//PAWN3
blackpawn3.setAnimation("black-pawn");

var blackpawn4 = createSprite(182.3125,108);//PAWN4
blackpawn4.setAnimation("black-pawn");

var blackpawn5 = createSprite(224.75,108);//PAWN5
blackpawn5.setAnimation("black-pawn");

var blackpawn6 = createSprite(267.1875,108);//PAWN6
blackpawn6.setAnimation("black-pawn");

var blackpawn7 = createSprite(309.625,108);//PAWN7
blackpawn7.setAnimation("black-pawn");

var blackpawn8 = createSprite(348.5,108);//PAWN8
blackpawn8.setAnimation("black-pawn");

var blackrook1 = createSprite(55,69);//ROOK1
blackrook1.setAnimation("black-rook");

var blackrook2 = createSprite(348.5,69);//ROOK2
blackrook2.setAnimation("black-rook");

var blackbishop1 = createSprite(139.875,69);//BISHOP1
blackbishop1.setAnimation("black-bishop");

var blackbishop2 = createSprite(267.1875,69);//BISHOP2
blackbishop2.setAnimation("black-bishop");

var blackknight2 = createSprite(309.625,69);//KNIGHT2
blackknight2.setAnimation("black-knight");

var blackknight1 = createSprite(97.4375,69);//KNIGHT1
blackknight1.setAnimation("black-knight");

var blackqueen = createSprite(182.3125,69);//QUEEN
blackqueen.setAnimation("black-queen");

var blackking = createSprite(224.75,69);//KING
blackking.setAnimation("black-king");

var placepawn = createSprite(-50,-50);//WHEN A PAWN IS PASSED,THIS REPLACES IT
placepawn.scale = 0.2;

var passtrip = createSprite(-50,-50);//THE STRIP THAT APPEARS WHEN A PAWN IS PASSED
passtrip.setAnimation("pawn-pass");

var placequeen = createSprite(-50,-50);//PASSED PAWN HAS A QUEEN CHOICE

var placeknight = createSprite(-50,-50);//PASSED PAWN HAS A KNIGHT CHOICE

var placebishop = createSprite(-50,-50);//PASSED PAWN HAS A BISHOP CHOICE

var placerook = createSprite(-50,-50);//PASSED PAWN HAS A ROOK CHOICE

//PIECES ARE GROUPED INTO LIST BASED ON PIECE TYPE OR COLOR
var pieces = [whitepawn1,whitepawn2,whitepawn3,whitepawn4,whitepawn5,whitepawn6,whitepawn7,whitepawn8,blackpawn1,blackpawn2,blackpawn3,blackpawn4,blackpawn5,blackpawn6,blackpawn7,blackpawn8,whiterook1,whiterook2,blackrook1,blackrook2,whitebishop1,whitebishop2,blackbishop1,blackbishop2,whiteknight1,whiteknight2,blackknight1,blackknight2,whiteking,blackking,whitequeen,blackqueen];
var whites = [whitepawn1,whitepawn2,whitepawn3,whitepawn4,whitepawn5,whitepawn6,whitepawn7,whitepawn8,whiterook1,whiterook2,whitebishop1,whitebishop2,whiteknight1,whiteknight2,whiteking,whitequeen];
var blacks = [blackpawn1,blackpawn2,blackpawn3,blackpawn4,blackpawn5,blackpawn6,blackpawn7,blackpawn8,blackrook1,blackrook2,blackbishop1,blackbishop2,blackknight1,blackknight2,blackking,blackqueen];
var pawns = [whitepawn1,whitepawn2,whitepawn3,whitepawn4,whitepawn5,whitepawn6,whitepawn7,whitepawn8,blackpawn1,blackpawn2,blackpawn3,blackpawn4,blackpawn5,blackpawn6,blackpawn7,blackpawn8];
var knights = [whiteknight1,whiteknight2,blackknight1,blackknight2];
var bishops = [whitebishop1,whitebishop2,blackbishop1,blackbishop2];
var rooks = [whiterook1,whiterook2,blackrook1,blackrook2];
var queens = [whitequeen,blackqueen];
var kings = [whiteking,blackking];

var choice = false;

var whitesidebar = [35,370];//SIDEBAR FOR DEAD BLACK PIECE
var blacksidebar = [35,25];//* * * WHITE PIECES
var wcast = [224.75,336.5,352.0625,336.5,55,336.5];
var bcast = [224.75,67,352.0625,67,55,67];

var wway = [true,true,true];//CAN WHITE CASTLE?
var bway = [true,true,true];//CAN BLACK CASTLE? 

function columnfix(y) {
  var columns = [55,97.4375,139.875,182.3125,224.75,267.1875,309.625,352.0625];
  var dif_y = 0;
  for (var i = 0; i < columns.length; i++) {
    dif_y = Math.abs(y - columns[i]);
    if (dif_y <= 21.21875) {
      return columns[i];
    }
    dif_y = 0;
  }
}//ADJUSTS PIECE'S X POSITION

function rowfix(x) {
  var rows = [67,105.5,144,182.5,221,259.5,298,336.5];
  var dif_x = [];
  for (var i = 0; i < rows.length; i++) {
    dif_x = Math.abs(x - rows[i]);
    if (dif_x <= 19.25) {
      return rows[i];
    }
  }
}//ADJUSTS PIECE'S Y POSITION

function onspot(x,y,thingie,para) {
  var on = false;
  var what = 0;
  for (var i = 0; i < pieces.length; i ++) {
    if ((pieces[i].x == x) && (pieces[i].y == y) && (pieces[i] != thingie)) {
      what = pieces[i];
      on = true;
    }
  }
  if (para == "thing") {
    return what;
  }
  else {
    return on;
  }
}//IS PIECE ON COORDINATES?

function outed(piece,side) {
  
  piece.x = side[0] + 15;
  side[0] += 15;
  piece.y = side[1];
  piece.scale = 0.5;
}//PUT A DEAD PIECE ON THE SIDEBAR

function isin(object,list) {
  var remit = false;
  for (var i = 0; i < list.length; i ++ ) {
    if (object == list[i]) {
      remit = true;
    }
  }
  return remit;
}//CHECKS IF AN ITEM IS IN A LIST

var possis = [];//POSSIBLE MOVES

//ALL VARIABLES BELOW USED TO FIND POSSIBLE MOVES
var xinter = 42.4375;
var yinter = -38.5;
var seqx = 0;
var seqy = 0;
var coverage = [false,false,false,false];

//OPPONENTS THAT A PIECE CAN KILL
var oppos1 = 0;
var oppos2 = 0;

//CAN WE CASTLE?
var done = false;
var qite = false;
var kite = false;
var qlack = false;
var klack = false;

//THESE FUNCTIONS CHECK IF ALL POSSIBLE MOVES HAVE BEEN COVERED.
function bishopcovered() {
  if ((xinter == 42.4375) && (yinter == -38.5)) {//FORWARD RIGHT
    coverage[0] = true;
  }
  if ((xinter == -42.4375) && (yinter == -38.5)) {//FORWARD LEFT
    coverage[1] = true;
  }
  if ((xinter == 42.4375) && (yinter == 38.5)) {//BACK RIGHT
    coverage[2] = true;
  }
  if ((xinter == -42.4375) && (yinter == 38.5)) {//BACK LEFT
    coverage[3] = true;
  }
}

function rookcovered() {
  if ((xinter == 0) && (yinter == -38.5)) {//UP
    coverage[0] = true;
  }
  if ((xinter == 42.4375) && (yinter == 0)) {//RIGHT
    coverage[1] = true;
  }
  if ((xinter == 0) && (yinter == 38.5)) {//DOWN
    coverage[2] = true;
  }
  if ((xinter == -42.4375) && (yinter == 0)) {//LEFT
    coverage[3] = true;
  }
}

function queencovered() {
  if ((xinter == 0) && (yinter == -38.5)) {//UP
    coverage[0] = true;
  }
  if ((xinter == 42.4375) && (yinter == -38.5)) {//UP RIGHT
    coverage[1] = true;
  }
  if ((xinter == 42.4375) && (yinter == 0)) {//RIGHT
    coverage[2] = true;
  }
  if ((xinter == 42.4375) && (yinter == 38.5)) {//DOWN RIGHT
    coverage[3] = true;
  }
  if ((xinter == 0) && (yinter == 38.5)) {//DOWN
    coverage[4] = true;
  }
  if ((xinter == -42.4375) && (yinter == 38.5)) {//DOWN LEFT
    coverage[5] = true;
  }
  if ((xinter == -42.4375) && (yinter == 0)) {//LEFT
    coverage[6] = true;
  }
  if ((xinter == -42.4375) && (yinter == -38.5)) {//UP LEFT
    coverage[7] = true;
  }
}


function pawnmoves(pawn,pawnx,pawny,possis) {
  if (isin(pawn,whites)) {
    
    //MOVING FORWARD ONE SQUARE
    if (onspot(pawnx,pawny - 38.5,pawn,"bool") == false) {
      possis[0] = [pawnx,pawny - 38.5];
    }
    else {
      possis[0] = [0,0];
    }

    //MOVING FORWARD TWO SQUARES
    if ((onspot(pawnx,pawny - 77,pawn,"bool")  == false) && (onspot(pawnx,pawny - 38.5,pawn,"bool") == false) && (pawny == 298)) {
      possis[1] = [pawnx,pawny - 77];
    }
    else {
      possis[1] = [0,0];
    }
    
    //OPPONENT TO THE UPPER RIGHT
    if ((onspot(pawnx + 42.4375,pawny - 38.5,pawn,"bool") == true)) {
      oppos1 = onspot(pawnx + 42.4375,pawny - 38.5,pawn,"thing");//PIECE THAT IS ABOUT TO BE ATTACKED (RIGHT)
      if (isin(oppos1,blacks)) {
      possis[2] = [pawnx + 42.4375,pawny - 38.5];
      }
      else {
        possis[2] = [0,0];
      }
    }
    else {
      possis[2] = [0,0];
    }
    
    //OPPONENT TO THE UPPER LEFT
    if ((onspot(pawnx - 42.4375,pawny - 38.5,pawn,"bool") == true)) {
      oppos2 = onspot(pawnx - 42.4375,pawny - 38.5,pawn,"thing");//PIECE THAT IS ABOUT TO BE ATTACKED (LEFT)
      if (isin(oppos2,blacks)) {
      possis[3] = [pawnx - 42.4375,pawny - 38.5];
      }
      else {
        possis[3] = [0,0];
      }
    }
    else {
      possis[3] = [0,0];
    }
  }//FOR WHITE PAWNS
  
  else if (isin(pawn,blacks)) {
    
    //FORWARD ONE
    if (onspot(pawnx,pawny + 38.5,pawn,"bool") == false) {
      (possis[0]) = [pawnx,pawny + 38.5];
    }
    else {
      possis[0] = [0,0];
    }
    
    //FORWARD TWO
    if ((onspot(pawnx,pawny + 77,pawn,"bool")  == false) && (onspot(pawnx,pawny + 38.5,pawn,"bool") == false) && (pawny == 105.5)) {
      (possis[1]) = [pawnx,pawny + 77];
    }
    else {
      possis[1] = [0,0];
    }
    
    //OPPONENT TO THE LOWER RIGHT
    if (onspot(pawnx + 42.4375,pawny + 38.5,pawn,"bool") == true) {
      oppos1 = onspot(pawnx + 42.4375,pawny + 38.5,pawn,"thing");//PIECE THAT IS ABOUT TO BE ATTACKED (RIGHT)
      if (isin(oppos1,whites)) {
      possis[2] = [pawnx + 42.4375,pawny + 38.5];
      }
      else {
        possis[2] = [0,0];
      }
    }
    else {
      possis[2] = [0,0];
    }
    
    //OPPONENT TO THE LOWER LEFT
    if (onspot(pawnx - 42.4375,pawny + 38.5,pawn,"bool") == true) {
      oppos2 = onspot(pawnx - 42.4375,pawny + 38.5,pawn,"thing");//PIECE THAT IS ABOUT TO BE ATTACKED (LEFT)
      if (isin(oppos2,whites)) {
      (possis[3]) = [pawnx - 42.4375,pawny + 38.5];
      }
      else {
        possis[3] = [0,0];
      }
    }
    else {
      possis[3] = [0,0];
    }
  }//FOR BLACK PAWNS
  
}//FIND ALL MOVES FOR A PAWN

function knightmoves(knight,knightx,knighty,possis) {
  
  //FORWARD RIGHT
  if (onspot(knightx + 42.4375,knighty - 77,knight,"bool") == false) {
    possis[possis.length] = [knightx + 42.4375,knighty - 77];
  }
  else {
    oppos1 = onspot(knightx + 42.4375,knighty - 77,knight,"thing");
    if (((isin(oppos1,blacks)) && (isin(knight,whites))) || ((isin(oppos1,whites)) && (isin(knight,blacks)))) {
      possis[possis.length] = [knightx + 42.4375,knighty - 77];
    }
  }
  
  //FORWARD LEFT
  if (onspot(knightx - 42.4375,knighty - 77,knight,"bool") == false) {
    possis[possis.length] = [knightx - 42.4375,knighty - 77];
  }
  else {
    oppos1 = onspot(knightx - 42.4375,knighty - 77,knight,"thing");
    if (((isin(oppos1,blacks)) && (isin(knight,whites))) || ((isin(oppos1,whites)) && (isin(knight,blacks)))) {
      possis[possis.length] = [knightx - 42.4375,knighty - 77];
    }
  }
  
  //BACK RIGHT
  if (onspot(knightx + 42.4375,knighty + 77,knight,"bool") == false) {
    possis[possis.length] = [knightx + 42.4375,knighty + 77];
  }
  else {
    oppos1 = onspot(knightx + 42.4375,knighty + 77,knight,"thing");
    if (((isin(oppos1,blacks)) && (isin(knight,whites))) || ((isin(oppos1,whites)) && (isin(knight,blacks)))) {
      possis[possis.length] = [knightx + 42.4375,knighty + 77];
    }
  }
  
  //BACK LEFT
  if (onspot(knightx - 42.4375,knighty + 77,knight,"bool") == false) {
    possis[possis.length] = [knightx - 42.4375,knighty + 77];
  }
  else {
    oppos1 = onspot(knightx - 42.4375,knighty + 77,knight,"thing");
    if (((isin(oppos1,blacks)) && (isin(knight,whites))) || ((isin(oppos1,whites)) && (isin(knight,blacks)))) {
      possis[possis.length] = [knightx - 42.4375,knighty + 77];
    }
  }
  
  //FORWARD RIGHT INVERSE
  if (onspot(knightx + 84.875,knighty - 38.5,knight,"bool") == false) {
    possis[possis.length] = [knightx + 84.875,knighty - 38.5];
  }
  else {
    oppos1 = onspot(knightx + 84.875,knighty - 38.5,knight,"thing");
    if (((isin(oppos1,blacks)) && (isin(knight,whites))) || ((isin(oppos1,whites)) && (isin(knight,blacks)))) {
      possis[possis.length] = [knightx + 84.875,knighty - 38.5];
    }
  }
  
  //FORWARD LEFT INVERSE
  if (onspot(knightx - 84.875,knighty - 38.5,knight,"bool") == false) {
    possis[possis.length] = [knightx - 84.875,knighty - 38.5];
  }
  else {
    oppos1 = onspot(knightx - 84.875,knighty - 38.5,knight,"thing");
    if (((isin(oppos1,blacks)) && (isin(knight,whites))) || ((isin(oppos1,whites)) && (isin(knight,blacks)))) {
      possis[possis.length] = [knightx - 84.875,knighty - 38.5];
    }
  }
  
  //BACK RIGHT INVERSE
  if (onspot(knightx + 84.875,knighty + 38.5,knight,"bool") == false) {
    possis[possis.length] = [knightx + 84.875,knighty + 38.5];
  }
  else {
    oppos1 = onspot(knightx + 84.875,knighty + 38.5,knight,"thing");
    if (((isin(oppos1,blacks)) && (isin(knight,whites))) || ((isin(oppos1,whites)) && (isin(knight,blacks)))) {
      possis[possis.length] = [knightx + 84.875,knighty + 38.5];
    }
  }
  
  //BACK LEFT INVERSE
  if (onspot(knightx - 84.875,knighty + 38.5,knight,"bool") == false) {
    possis[possis.length] = [knightx - 84.875,knighty + 38.5];
  }
  else {
    oppos1 = onspot(knightx - 84.875,knighty + 38.5,knight,"thing");
    if (((isin(oppos1,blacks)) && (isin(knight,whites))) || ((isin(oppos1,whites)) && (isin(knight,blacks)))) {
      possis[possis.length] = [knightx - 84.875,knighty + 38.5];
    }
  }
}//MOVES FOR A KNIGHT

function bishopmoves(bishop,bishopx,bishopy,possis) {
  coverage = [false,false,false,false];
  xinter = 42.4375;
  yinter = -38.5;
  seqx = columnfix(bishopx);
  seqy = rowfix(bishopy);
  while (done == false) {
    seqx += xinter;
    seqy += yinter;
    oppos1 = onspot(seqx,seqy,bishop,"thing");
    if ((onspot(seqx,seqy,bishop,"bool")) || (seqy < 67) || (seqy > 337) || (seqx < 55) || (seqx > 353)) {
      
      if (((isin(oppos1,blacks)) && (isin(bishop,whites))) || ((isin(oppos1,whites)) && (isin(bishop,blacks)))) {
        possis[possis.length] = [seqx,seqy];
      }
      
      seqx = columnfix(bishopx);
      seqy = rowfix(bishopy);
      bishopcovered();
      oppos1 = 0;
      
      if (coverage[1] == false) {
        xinter = -42.4375;
        yinter = -38.5;
      }
      else if (coverage[2] == false) {
        xinter = 42.4375;
        yinter = 38.5;
      }
      else if (coverage[3] == false) {
        xinter = -42.4375;
        yinter = 38.5;
      }
    }
    else {
      possis[possis.length] = [seqx,seqy];
      oppos1 = 0;
    }
    if ((coverage[0]) & (coverage[1]) & (coverage[2]) & (coverage[3])) {
      done = true;
    }
  }//LOOP TO FIND MOVES
}//MOVES FOR A BISHOP

function rookmoves(rook,rookx,rooky,possis) {
  coverage = [false,false,false,false];
  xinter = 0;
  yinter = -38.5;
  seqx = columnfix(rookx);
  seqy = rowfix(rooky);
  while (done == false) {
    seqx += xinter;
    seqy += yinter;
    oppos1 = onspot(seqx,seqy,rook,"thing");
    if ((onspot(seqx,seqy,rook,"bool")) || (seqy < 67) || (seqy > 337) || (seqx < 55) || (seqx > 353)) {
      
      if (((isin(oppos1,blacks)) && (isin(rook,whites))) || ((isin(oppos1,whites)) && (isin(rook,blacks)))) {
        possis[possis.length] = [seqx,seqy];
      }
      
      seqx = columnfix(rookx);
      seqy = rowfix(rooky);
      rookcovered();
      oppos1 = 0;
      
      if (coverage[1] == false) {
        xinter = 42.4375;
        yinter = 0;
      }
      else if (coverage[2] == false) {
        xinter = 0;
        yinter = 38.5;
      }
      else if (coverage[3] == false) {
        xinter = -42.4375;
        yinter = 0;
      }
    }
    else {
      possis[possis.length] = [seqx,seqy];
      oppos1 = 0;
    }
    if ((coverage[0]) & (coverage[1]) & (coverage[2]) & (coverage[3])) {
      done = true;
    }
  }
  
  if ((rook == whiterook2)) {
    if (wway[0] && (wway[1]) && (onspot(267.1875,336.5,rook,"bool") == false) && (onspot(309.625,336.5,rook,"bool") == false)) {
      possis[possis.length] = [224.75,336.5];
    }
  }//WHITEROOK2 
  
  if (rook == whiterook1) {
    if (wway[0] && (wway[2]) && (onspot(182.3125,336.5,rook,"bool") == false) && (onspot(139.875,336.5,rook,"bool") == false) && (onspot(97.4375,336.5,rook,"bool") == false)) {
      possis[possis.length] = [224.75,336.5];
    }
  }////WHITEROOK1
  
  if (rook == blackrook2) {
    if (bway[0] && (bway[1]) && (onspot(267.1875,67,rook,"bool") == false) && (onspot(309.625,67,rook,"bool") == false)) {
      possis[possis.length] = [224.75,67];
    }
  }//BLACKROOK2
  if (rook == blackrook1) {
    if (bway[0] && (bway[2]) && (onspot(182.3125,67,rook,"bool") == false) && (onspot(139.875,67,rook,"bool") == false) && (onspot(97.4375,67,rook,"bool") == false)) {
      possis[possis.length] = [224.75,67];
    }
  }//BLACKROOK1
}//MOVES FOR A ROOK

function queenmoves(queen,queenx,queeny,possis) {
  coverage = [false,false,false,false,false,false,false,false];
  xinter = 0;
  yinter = -38.5;
  seqx = columnfix(queenx);
  seqy = rowfix(queeny);
  while (done == false) {
    seqx += xinter;
    seqy += yinter;
    oppos1 = onspot(seqx,seqy,queen,"thing");
    if ((onspot(seqx,seqy,queen,"bool")) || (seqy < 67) || (seqy > 337) || (seqx < 55) || (seqx > 353)) {
      
      if (((isin(oppos1,blacks)) && (isin(queen,whites))) || ((isin(oppos1,whites)) && (isin(queen,blacks)))) {
        possis[possis.length] = [seqx,seqy];
      }
      
      seqx = columnfix(queenx);
      seqy = rowfix(queeny);
      queencovered();
      oppos1 = 0;
      
      if (coverage[1] == false) {//UP RIGHT
        xinter = 42.4375;
        yinter = -38.5;
      }
      else if (coverage[2] == false) {//RIGHT
        xinter = 42.4375;
        yinter = 0;
      }
      else if (coverage[3] == false) {//DOWN RIGHT
        xinter = 42.4375;
        yinter = 38.5;
      }
      else if (coverage[4] == false) {//DOWN
        xinter = 0;
        yinter = 38.5;
      }
      else if (coverage[5] == false) {//DOWN LEFT
        xinter = -42.4375;
        yinter = 38.5;
      }
      else if (coverage[6] == false) {//LEFT
        xinter = -42.4375;
        yinter = 0;
      }
      else if (coverage[7] == false) {//UP LEFT
        xinter = -42.4375;
        yinter = -38.5;
      }
    }
    else {
      possis[possis.length] = [seqx,seqy];
      oppos1 = 0;
    }
    if ((coverage[0]) && (coverage[1]) && (coverage[2]) && (coverage[3]) && (coverage[4]) && (coverage[5]) && (coverage[6]) && (coverage[7])) {
      done = true;
    }
  }//LOOPING TO COVER FOR EACH COORDINATE IN EACH DIRECTION
}//MOVES FOR A QUEEN

function kingmoves(king,kingx,kingy,possis) {
  
  //UP
  if (onspot(kingx,kingy - 38.5,king,"bool") == false) {
    possis[possis.length] = [kingx,kingy - 38.5];
  }
  else {
    oppos1 = onspot(kingx,kingy - 38.5,king,"thing");
    if (((isin(oppos1,blacks)) && (isin(king,whites))) || ((isin(oppos1,whites)) && (isin(king,blacks)))) {
      possis[possis.length] = [kingx,kingy - 38.5];
    }
  }
  
  //UP RIGHT
  if (onspot(kingx + 42.4375,kingy - 38.5,king,"bool") == false) {
    possis[possis.length] = [kingx + 42.4375,kingy - 38.5];
  }
  else {
    oppos1 = onspot(kingx + 42.4375,kingy - 38.5,king,"thing");
    if (((isin(oppos1,blacks)) && (isin(king,whites))) || ((isin(oppos1,whites)) && (isin(king,blacks)))) {
      possis[possis.length] = [kingx + 42.4375,kingy - 38.5];
    }
  }
  
  //RIGHT
  if (onspot(kingx + 42.4375,kingy,king,"bool") == false) {
    possis[possis.length] = [kingx + 42.4375,kingy];
  }
  else {
    oppos1 = onspot(kingx + 42.4375,kingy ,king,"thing");
    if (((isin(oppos1,blacks)) && (isin(king,whites))) || ((isin(oppos1,whites)) && (isin(king,blacks)))) {
      possis[possis.length] = [kingx + 42.4375,kingy];
    }
  }
  
  //DOWN RIGHT
  if (onspot(kingx + 42.4375,kingy + 38.5,king,"bool") == false) {
    possis[possis.length] = [kingx + 42.4375,kingy + 38.5];
  }
  else {
    oppos1 = onspot(kingx + 42.4375,kingy + 38.5,king,"thing");
    if (((isin(oppos1,blacks)) && (isin(king,whites))) || ((isin(oppos1,whites)) && (isin(king,blacks)))) {
      possis[possis.length] = [kingx + 42.4375,kingy + 38.5];
    }
  }
  
  //DOWN
  if (onspot(kingx,kingy + 38.5,king,"bool") == false) {
    possis[possis.length] = [kingx,kingy + 38.5];
  }
  else {
    oppos1 = onspot(kingx,kingy + 38.5,king,"thing");
    if (((isin(oppos1,blacks)) && (isin(king,whites))) || ((isin(oppos1,whites)) && (isin(king,blacks)))) {
      possis[possis.length] = [kingx,kingy + 38.5];
    }
  }
  
  //DOWN LEFT
  if (onspot(kingx - 42.4375,kingy + 38.5,king,"bool") == false) {
    possis[possis.length] = [kingx - 42.4375,kingy + 38.5];
  }
  else {
    oppos1 = onspot(kingx - 42.4375,kingy + 38.5,king,"thing");
    if (((isin(oppos1,blacks)) && (isin(king,whites))) || ((isin(oppos1,whites)) && (isin(king,blacks)))) {
      possis[possis.length] = [kingx - 42.4375,kingy + 38.5];
    }
  }
  
  //LEFT
  if (onspot(kingx - 42.4375,kingy,king,"bool") == false) {
    possis[possis.length] = [kingx - 42.4375,kingy];
  }
  else {
    oppos1 = onspot(kingx - 42.4375,kingy,king,"thing");
    if (((isin(oppos1,blacks)) && (isin(king,whites))) || ((isin(oppos1,whites)) && (isin(king,blacks)))) {
      possis[possis.length] = [kingx - 42.4375,kingy];
    }
  }
  
  //UP LEFT
  if (onspot(kingx - 42.4375,kingy - 38.5,king,"bool") == false) {
    possis[possis.length] = [kingx - 42.4375,kingy - 38.5];
  }
  else {
    oppos1 = onspot(kingx - 42.4375,kingy - 38.5,king,"thing");
    if (((isin(oppos1,blacks)) && (isin(king,whites))) || ((isin(oppos1,whites)) && (isin(king,blacks)))) {
      possis[possis.length] = [kingx - 42.4375,kingy - 38.5];
    }
  }
  
  if (king == whiteking) {
    if (wway[0] && (wway[1]) && (onspot(267.1875,336.5,king,"bool") == false) && (onspot(309.625,336.5,king,"bool") == false)) {
      kite = true;
      possis[possis.length] = [352.0625,336.5];
    }//KINGSIDE
    if (wway[0] && (wway[2]) && (onspot(182.3125,336.5,king,"bool") == false) && (onspot(139.875,336.5,king,"bool") == false) && (onspot(97.4375,336.5,king,"bool") == false)) {
      qite = true;
      possis[possis.length] = [55,336.5];
    }//QUEENSIDE
  }//WHITE CASTLING
  else if (king == blackking) {
    if (bway[0] && (bway[1]) && (onspot(267.1875,67,king,"bool") == false) && (onspot(309.625,67,king,"bool") == false)) {
      klack = true;
      possis[possis.length] = [352.0625,67];
    }//KINGSIDE
    if (bway[0] && (bway[2]) && (onspot(182.3125,67,king,"bool") == false) && (onspot(139.875,67,king,"bool") == false) && (onspot(97.4375,67,king,"bool") == false)) {
      qlack = true;
      possis[possis.length] = [55,67];
    }//QUEENSIDE
  }//BLACK CASTLING 
  
}//MOVES FOR A KING

function castle(list,king,rook1,rook2,way) {
  if (((king.x != list[0]) || (king.y != list[1])) && (way == wway)) {
    wway[0] = false;
  }
  if (((king.x != list[0]) || (king.y != list[1])) && (way == bway)) {
    bway[0] = false;
  }
  if (way[0] && (way == wway)) {
    
    if (((rook2.x != list[2]) || (rook2.y != list[3])) && (rook2 == whiterook2)) {
      wway[1] = false;
    }
    if (((rook1.x != list[4]) || (rook1.x != list[5])) && (rook1 == whiterook1)) {
     wway[2] = false;
    }
  }
  if (way[0] && (way == bway)) {
    
    if (((rook2.x != list[2]) || (rook2.y != list[3])) && (rook2 == blackrook2)) {
      bway[1] = false;
    }
    if (((rook1.x != list[4]) || (rook1.y != list[5])) && (rook1 == blackrook1)) {
     bway[2] = false;
    }
  }
}//CAN A KING CASTLE?

var carta = [];
var check = false;
var booly = false;
var procede = false;
var dund = 0;
var pensis = [];
var chequer = 0;
var looping = false;

function incheck(king,possis) {
  booly = false;
  if (isin(king,whites)) {
    for (var i = 0; i < blacks.length; i ++) {
      possis = [];
      done = false;
      oppos1 = 0;
      oppos2 = 0;
      if (isin(blacks[i],pawns)) {
    pawnmoves(blacks[i],columnfix(blacks[i].x),rowfix(blacks[i].y),possis);
    procede = true;
    }
    else if (isin(blacks[i],knights)) {
      knightmoves(blacks[i],columnfix(blacks[i].x),rowfix(blacks[i].y),possis);
    }
    if (isin(blacks[i],bishops)) {
      bishopmoves(blacks[i],columnfix(blacks[i].x),rowfix(blacks[i].y),possis);
    }
    else if (isin(blacks[i],rooks)) {
      rookmoves(blacks[i],columnfix(blacks[i].x),rowfix(blacks[i].y),possis);
    }
    else if (isin(blacks[i],queens)) {
      queenmoves(blacks[i],columnfix(blacks[i].x),rowfix(blacks[i].y),possis);
    }
    else if (isin(blacks[i],kings)) {
      kingmoves(blacks[i],columnfix(blacks[i].x),rowfix(blacks[i].y),possis);
    }
      for (var j = 0; j < possis.length; j ++) {
        if ((possis[j][0] == columnfix(king.x)) && (possis[j][1] == rowfix(king.y))) {
          chequer = blacks[i];
          return true;
        }
      }
    }
  }
  else if (isin(king,blacks)){
    for (var k = 0; k < whites.length; k ++) {
      possis = [];
      done = false;
      oppos1 = 0;
      oppos2 = 0;
      
      if (isin(whites[k],pawns)) {
    pawnmoves(whites[k],columnfix(whites[k].x),rowfix(whites[k].x),possis);
  }
      else if (isin(whites[k],knights)) {
    knightmoves(whites[k],columnfix(whites[k].x),rowfix(whites[k].y),possis);
  }
      else if (isin(whites[k],bishops)) {
    bishopmoves(whites[k],columnfix(whites[k].x),rowfix(whites[k].y),possis);
  }
      else if (isin(whites[k],rooks)) {
    rookmoves(whites[k],columnfix(whites[k].x),rowfix(whites[k].y),possis);
  }
      else if (isin(whites[k],queens)) {
    queenmoves(whites[k],columnfix(whites[k].x),rowfix(whites[k].y),possis);
  }
      else if (isin(whites[k],kings)) {
    kingmoves(whites[k],columnfix(whites[k].x),rowfix(whites[k].y),possis);
  }
  
    for (var l = 0; l < possis.length; l ++) {
      if ((possis[l][0] == columnfix(king.x)) && (possis[l][1] == rowfix(king.y))) {
        chequer = whites[k];
        return true;
      }
    }
    }
  }
  return booly;
}//IS THE KING IN CHECK?

function whichone(piece,initx,inity) {
  
  if (dund == 0) {
  if (isin(piece,pawns)) {
    pawnmoves(piece,columnfix(initx),rowfix(inity),possis);
  }
  else if (isin(piece,knights)) {
    possis = [];
    knightmoves(piece,columnfix(initx),rowfix(inity),possis);
  }
  else if (isin(piece,bishops)) {
    bishopmoves(piece,columnfix(initx),rowfix(inity),possis);
  }
  else if (isin(piece,rooks)) {
    rookmoves(piece,columnfix(initx),rowfix(inity),possis);
  }
  else if (isin(piece,queens)) {
    queenmoves(piece,columnfix(initx),rowfix(inity),possis);
  }
  else if (isin(piece,kings)) {
    possis = [];
    kingmoves(piece,columnfix(initx),rowfix(inity),possis);
  }
  }//CALLING THE RIGHT FUNCTION TO FIND POSSIBLE MOVES

  carta = [columnfix(piece.x),rowfix(piece.y)];
  
  check = false;
  for (var i = 0; i < possis.length; i ++) {
    if (((possis[i])[0] == carta[0]) && ((possis[i])[1] == carta[1])) {
      check = true;
      dund += 1;
    }
  }
  
  //CHECKING WHETHER THE MOVE IS LEGAL OR NOT
  if (check == true) {
    return true;
  }
  else if ((piece.x != initx) && (piece.y != inity) && (mousePressedOver(piece) == false) && (xing != 0) && (ying != 0)){//(piece.x != initx) && (piece.y != inity) &&     && (xing != 0) && (ying != 0)

    dund = 0;
    piece.x = initx;
    piece.y = inity;
    piece = 0;
    possis = [];
    oppos1 = 0;
    oppos2 = 0;
    done = false;
    return false;
  }
  else if ((piece.x == xing) && (piece.y == ying) && (mousePressedOver(piece) == false)) {
    dund = 0;
    return false;
  }
}//IS THE PIECE MAKING A LEGAL MOVE?

var hold = false;
var piece = 0;
var bturn = false;
var wturn = true;
var change = false;
var retry = 1;
var xing = 0;
var ying = 0;

function draw() {
  background("white"); 
  drawSprites();
  
  if (looping && wturn) {
    if (mousePressedOver(placequeen)) {
        piece.setAnimation("white-queen");
        queens[queens.length] = piece;
        choice = true;
    }
    else if (mousePressedOver(placeknight)) {
      piece.setAnimation("white-knight");
      knights[knights.length] = piece;
      choice = true;
    }
    else if (mousePressedOver(placerook)) {
      piece.setAnimation("white-rook");
      rooks[rooks.length] = piece;
      choice = true;
            }
    else if (mousePressedOver(placebishop)) {
      piece.setAnimation("white-bishop");
      bishops[bishops.length] = piece;
      choice = true;
    }
  }//PROTOCOL FOR WHEN THE WHITE PAWN IS PASSED
  if (looping && bturn) {
    if (mousePressedOver(placequeen)) {
      piece.setAnimation("black-queen");
      queens[queens.length] = piece;
      choice = true;
    }
    else if (mousePressedOver(placeknight)) {
      piece.setAnimation("black-knight");
      knights[knights.length] = piece;
      choice = true;
    }
    else if (mousePressedOver(placerook)) {
      piece.setAnimation("black-rook");
      rooks[rooks.length] = piece;
      choice = true;
            }
    else if (mousePressedOver(placebishop)) {
      piece.setAnimation("black-bishop");
      bishops[bishops.length] = piece;
      choice = true;
    }
  }//PROTOCOL FOR WHEN THE BLACK PAWN IS PASSED
  
  if (choice) {
    pawns[pawns.indexOf(piece)] = placepawn;
    placequeen.x = -50;
    placequeen.y = -50;
    placeknight.x = -50;
    placeknight.y = -50;
    placebishop.x = -50;
    placebishop.y = -50;
    placerook.x = -50;
    placerook.y = -50;
    passtrip.x = -50;
    passtrip.y = -50;
    choice = false;
    looping = false;
    piece = 0;
    if (wturn) {
      wturn = false;
      bturn = true;
    }
    else if (bturn) {
      bturn = false;
      wturn = true;
    }
    }//PASSED PAWN UPGRADING
  
  //PIECE DRAGGING
  if ((mousePressedOver(piece)) && ((piece.scale == 1) || (piece.scale == 1.3)) && (looping == false)) {//CHESS PIECE DRAG
    piece.x = World.mouseX;
    piece.y = World.mouseY;
    piece.scale = 1.3;
    hold = true;
  }
  else if (looping == false) {
    hold = false;
  }
  
  //KILLING OPPONENT PROTOCOL
  if (onspot(piece.x,piece.y,piece,"bool")) {
    if ((isin(onspot(piece.x,piece.y,piece,"thing"),whites)) && (isin(piece,blacks)) && ((incheck(blackking) == false) || (incheck(blackking) && (piece.x == chequer.x) && (piece.y == chequer.y)))) {// && (incheck(blackking) == false)
      outed(onspot(piece.x,piece.y,piece,"thing"),blacksidebar);
    }
    else if ((isin(onspot(piece.x,piece.y,piece,"thing"),blacks)) && (isin(piece,whites)) && ((incheck(whiteking) == false) || (incheck(whiteking) && (piece.x == chequer.x) && (piece.y == chequer.y)))) {// && (incheck(whiteking) == false)
      outed(onspot(piece.x,piece.y,piece,"thing"),whitesidebar);
    }
  }
  
  //CHECKS IF THE MOVE IS MADE AND IF IT IS LEGAL
  if ((whichone(piece,columnfix(xing),rowfix(ying))) && (columnfix(piece.x) == piece.x) && (rowfix(piece.y) == piece.y) && (change == true) && ((piece.x != xing) || (piece.y != ying)) && (looping == false)) {// && (piece.x != xing) && (piece.y != ying)

    if (wturn == true) {
      
      //CASTLING
      if ((whiteking.x == whiterook1.x) && (whiteking.y == whiterook1.y) && qite && (incheck(whiteking) == false)) {
        whiteking.x = 139.875;
        whiterook1.x = 182.3125;
      }
      if ((whiteking.x == whiterook2.x) && (whiteking.y == whiterook2.y) && kite && (incheck(blackking) == false)) {
        whiteking.x = 309.625;
        whiterook2.x = 267.1875;
      }
      
      //IS THE KING IN CHECK OR NOT?
      if (incheck(whiteking,pensis) && ((columnfix(piece.x) != chequer.x) || (rowfix(piece.y) != chequer.y)) && ((whiteking.x != chequer.x) || (whiteking.y != chequer.y))) {
        piece.x = xing;
        piece.y = ying;
        dund = 0;
        xing = 0;
        ying = 0;
        piece = 0;
        possis = [];
        retry = 1;
        done = false;
      }
      else {
        if (isin(piece,pawns) && (piece.y == 67)) {//IS THE PAWN BEING PASSED
          
          
          passtrip.x = piece.x;
          passtrip.y = 124.25;//151.875
          
          placequeen.setAnimation("white-queen");
          placequeen.x = piece.x;
          placequeen.y = 67;
          placequeen.scale = 1.25;
          
          placeknight.setAnimation("white-knight");
          placeknight.x = piece.x;
          placeknight.y = 105.5;
          placeknight.scale = 1.25;
          
          placerook.setAnimation("white-rook");
          placerook.x = piece.x;
          placerook.y = 144;
          placerook.scale = 1.25;
          
          placebishop.setAnimation("white-bishop");
          placebishop.x = piece.x;
          placebishop.y = 182.5;
          placebishop.scale = 1.25;
          looping = true;
        }//PAWN HAS BEEN PASSED
        else {
          piece = 0;
          bturn = true;
          wturn = false;
        }//MAKING IT BLACK'S TURN NOW
        
        //CLEARING A LOT OF STORED DATA AND RESETTING VARIABLES
        dund = 0;
        change = false;
        retry = 1;
        possis = [];
        xing = 0;
        ying = 0;
        oppos1 = 0;
        oppos2 = 0;
        done = false;
        coverage = 0;
        chequer = 0;
        incheck(blackking,pensis);
        done = false;
        castle(wcast,whiteking,whiterook1,whiterook2,wway);
      }
    }//IT WAS WHITE'S TURN
    else if (bturn == true) {
      
      if ((blackking.x == blackrook1.x) && (blackking.y == blackrook1.y) && qlack) {
        blackking.x = 139.875;
        blackrook1.x = 182.3125;
      }
      if ((blackking.x == blackrook2.x) && (blackking.y == blackrook2.y) && klack) {
        blackking.x = 309.625;
        blackrook2.x = 267.1875;
      }
      
      if (incheck(blackking,pensis) && ((columnfix(piece.x) != chequer.x) || (rowfix(piece.y) != chequer.y)) && ((whiteking.x != chequer.x) || (whiteking.y != chequer.y))) {
        piece.x = xing;
        piece.y = ying;
        dund = 0;
        xing = 0;
        ying = 0;
        retry = 1;
        possis = [];
        piece = 0;
        done = false;
      }
      else {
        
        if (isin(piece,pawns) && (piece.y == 336.5)) {
          passtrip.x = piece.x;
          passtrip.y = 278.75;//251.625
          
          placequeen.setAnimation("black-queen");
          placequeen.x = piece.x;
          placequeen.y = 336.5;
          placequeen.scale = 1.25;
          
          placeknight.setAnimation("black-knight");
          placeknight.x = piece.x;
          placeknight.y = 298;
          placeknight.scale = 1.25;
          
          placerook.setAnimation("black-rook");
          placerook.x = piece.x;
          placerook.y = 259.5;
          placerook.scale = 1.25;
          
          placebishop.setAnimation("black-bishop");
          placebishop.x = piece.x;
          placebishop.y = 221;
          placebishop.scale = 1.25;
          looping = true;
        }
        else {
          piece = 0;
          wturn = true;
          bturn = false;
        }
        dund = 0;
        change = false;
        //piece = 0;
        retry = 1;
        possis = [];
        xing = 0;
        ying = 0;
        oppos1 = 0;
        oppos2 = 0;
        done = false;
        coverage = 0;
        chequer = 0;
        incheck(whiteking,pensis);
        done = false;
        castle(bcast,blackking,blackrook1,blackrook2,bway);
      }
    }//IT WAS BLACK'S TURN
  }
  else if ((piece.x == xing) && (piece.y == ying) && (mousePressedOver(piece) == false) && (looping == false)) {
    xing = 0;
    ying = 0;
    piece = 0;
    retry = 1;
    done = false;
  }

  if ((hold == false) && (looping == false)) {
  for (var i = 0; i < pieces.length; i ++) {
    
    if ((mousePressedOver(pieces[i]))) {
      
      if (((isin(pieces[i],blacks)) && (bturn == true)) || ((isin(pieces[i],whites)) && (wturn == true))) {
        hold = true;
        piece = pieces[i];
        change = true;
        if (retry == 1) {
          xing = columnfix(piece.x);
          ying = rowfix(piece.y);
          retry += 1;
        }
      }
      else {
        hold = false;
        change = false;
      }
    break;
    }//SAVES PIECE'S INFO IN VARIABLES
    else if (pieces[i].scale != 0.5) {
      pieces[i].x = columnfix(pieces[i].x);
      pieces[i].y = rowfix(pieces[i].y);
      pieces[i].scale = 1;
    }//FIXING PIECE IN SQUARE "CENTER"
    
  }
  }//IS A PIECE BEING DRAGGED?
}


//YAY WE'RE DONE!!! (>^-^)> <(^-^<) ^(^-^)^ <(^-^<) (>^-^)>



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
