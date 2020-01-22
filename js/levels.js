var LEVELS = [
	[[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,0,0,2,0,0,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1]],
	[[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,0,2,0,2,0,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1]],
	[[1,1,1,1,1,1,1,1],[1,0,0,0,0,2,0,1],[1,0,1,1,1,1,0,1],[1,0,2,0,0,0,0,1],[1,1,1,1,1,1,1,1]],
	[[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,0,0,3,0,0,1],[1,0,2,3,2,0,1],[1,1,1,1,1,1,1]],
	[[1,1,1,1,1,1,1,1,1],[1,0,0,0,2,0,0,0,1],[1,0,0,0,0,0,0,0,1],[1,{ value:5, dir:4 },{ value:5, dir:4 },{ value:5, dir:4 },1,{ value:5, dir:4 },{ value:5, dir:4 },{ value:5, dir:4 },1],[1,0,0,0,0,0,0,0,1],[1,0,0,0,2,0,0,0,1],[1,1,1,1,1,1,1,1,1]],
	[[3,3,3,3,3,3,3],[3,0,0,0,0,0,3],[3,0,0,0,2,0,3],[3,0,0,{ value:5, dir:2 },0,0,3],[3,0,2,0,0,0,3],[3,0,0,0,0,0,3],[3,3,3,3,3,3,3]],
	[[1,1,1,1,1,1,1],[1,3,3,0,3,2,1],[1,0,3,0,3,0,1],[1,0,0,2,0,0,1],[1,0,3,0,3,0,1],[1,2,3,3,3,3,1],[1,1,1,1,1,1,1]],
	[[1,1,1,1,1,1,1,1,1],[1,2,0,0,3,0,0,2,1],[1,0,0,0,0,0,0,0,1],[1,0,0,3,0,3,0,0,1],[1,0,3,0,2,0,3,0,1],[1,1,1,1,1,1,1,1,1]],
	[[1,1,1,1,1,1,1,1,1],[1,0,0,{ value:5, dir:3 },{ value:5, dir:4 },0,0,0,1],[1,0,0,{ value:5, dir:3 },{ value:5, dir:4 },{ value:5, dir:4 },0,0,1],[1,0,0,0,{ value:5, dir:4 },{ value:5, dir:4 },0,0,1],[1,{ value:5, dir:3 },{ value:5, dir:3 },{ value:5, dir:3 },0,{ value:5, dir:3 },{ value:5, dir:3 },{ value:5, dir:3 },1],[1,0,0,{ value:5, dir:1 },0,{ value:5, dir:2 },0,0,1],[1,2,0,{ value:5, dir:1 },0,{ value:5, dir:2 },0,2,1],[1,1,1,1,1,1,1,1,1]],
	[[1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,{ value:5, dir:1 },0,3,1],[1,{ value:5, dir:4 },{ value:5, dir:4 },1,1,1,3,{ value:5, dir:1 },0,3,1],[1,0,0,1,0,2,0,0,0,0,1],[1,{ value:5, dir:3 },{ value:5, dir:3 },1,1,1,1,1,{ value:5, dir:4 },{ value:5, dir:4 },1],[1,0,0,0,0,2,0,1,0,0,1],[1,3,0,{ value:5, dir:2 },3,1,1,1,{ value:5, dir:3 },{ value:5, dir:3 },1],[1,3,0,{ value:5, dir:2 },0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1]],
	[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],[3,0,0,0,0,0,0,0,0,0,0,0,0,0,3],[3,3,0,0,0,0,0,2,0,0,0,0,0,0,3],[3,3,0,{ value:5, dir:4 },0,0,0,0,0,0,0,0,0,0,3],[3,3,0,0,0,0,{ value:5, dir:2 },{ value:5, dir:2 },{ value:5, dir:4 },{ value:5, dir:3 },3,3,3,3,3],[3,3,3,3,3,{ value:5, dir:4 },{ value:5, dir:3 },{ value:5, dir:1 },{ value:5, dir:1 },0,0,0,0,3,3],[3,0,0,0,0,0,0,0,0,0,0,{ value:5, dir:3 },0,3,3],[3,0,0,0,0,0,0,2,0,0,0,0,0,3,3],[3,0,0,0,0,0,0,0,0,0,0,0,0,0,3],[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]],
	[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,3,3,0,0,0,3,3,0,0,0,0,1],[1,0,0,3,3,0,3,0,0,0,0,3,0,3,1],[1,3,0,0,0,0,3,3,3,0,0,0,0,2,1],[1,3,0,3,3,0,0,0,0,0,3,0,0,0,1],[1,0,0,0,3,0,0,1,0,0,3,3,0,3,1],[1,3,3,0,0,0,0,3,3,0,0,0,0,3,1],[1,0,3,0,0,3,0,0,0,0,3,3,0,0,1],[1,2,0,0,3,0,0,0,3,0,3,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],
	[[3,3,3,3,3,1,1,1,3,1,1,1],[3,1,1,1,0,{ value:5, dir:2 },0,1,3,1,2,1],[3,1,0,{ value:5, dir:2 },0,1,{ value:5, dir:4 },1,3,1,{ value:5, dir:4 },1],[3,1,{ value:5, dir:3 },1,3,3,0,3,3,0,0,3],[3,0,0,3,3,0,0,3,1,{ value:5, dir:4 },1,3],[1,{ value:5, dir:3 },1,3,1,{ value:5, dir:3 },1,0,{ value:5, dir:1 },0,1,3],[1,2,1,3,1,0,{ value:5, dir:1 },0,1,1,1,3],[1,1,1,3,1,1,1,3,3,3,3,3]],
	[[{ value:5, dir:4 },{ value:5, dir:1 },3,{ value:5, dir:1 },{ value:5, dir:1 },3,{ value:5, dir:1 },{ value:5, dir:1 },3,{ value:5, dir:1 },{ value:5, dir:1 },3,{ value:5, dir:1 }],[{ value:5, dir:4 },0,0,0,0,0,0,0,0,0,0,0,{ value:5, dir:3 }],[3,0,1,0,3,0,3,0,3,0,3,0,3],[{ value:5, dir:4 },0,0,0,0,0,0,0,0,2,0,0,{ value:5, dir:3 }],[{ value:5, dir:4 },0,3,0,0,0,1,0,0,0,3,0,{ value:5, dir:3 }],[3,0,0,2,0,0,0,0,0,0,0,0,3],[{ value:5, dir:4 },0,3,0,3,0,3,0,3,0,1,0,{ value:5, dir:3 }],[{ value:5, dir:4 },0,0,0,0,0,0,0,0,0,0,0,{ value:5, dir:3 }],[3,{ value:5, dir:2 },{ value:5, dir:2 },3,{ value:5, dir:2 },{ value:5, dir:2 },3,{ value:5, dir:2 },{ value:5, dir:2 },3,{ value:5, dir:2 },{ value:5, dir:2 },3]],
	[[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,3,3,0,3,0,0,3,0,0,0,3,1],[1,0,0,0,3,0,0,0,0,0,3,0,1],[1,0,0,0,3,0,0,3,0,3,0,0,1],[1,0,0,0,0,0,0,3,0,0,0,2,1],[1,0,0,3,0,3,0,3,0,3,0,0,1],[1,2,3,0,0,3,0,0,0,0,3,0,1],[1,3,0,0,0,0,0,0,3,0,0,3,1],[1,1,1,1,1,1,1,1,1,1,1,1,1]],
	[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],[3,0,0,0,0,0,0,3,0,0,0,0,0,0,3],[3,0,0,0,0,0,0,3,0,0,0,0,0,0,3],[3,0,2,2,3,0,0,0,0,0,3,3,0,0,3],[3,0,2,2,3,0,0,0,0,0,3,3,{ value:5, dir:3 },0,3],[3,0,0,0,0,0,0,3,0,0,0,0,0,0,3],[3,0,0,0,0,0,0,3,0,0,0,0,0,0,3],[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]],
	[[1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,{ value:5, dir:2 },0,0,0,0,3,0,2,1],[1,0,3,{ value:5, dir:3 },3,3,0,0,3,{ value:5, dir:4 },{ value:5, dir:4 },1],[1,0,3,0,{ value:5, dir:2 },3,{ value:5, dir:4 },{ value:5, dir:4 },3,0,0,1],[1,0,3,{ value:5, dir:3 },{ value:5, dir:3 },3,{ value:5, dir:3 },{ value:5, dir:3 },3,0,0,1],[1,0,3,0,0,3,0,0,3,0,0,1],[1,{ value:5, dir:3 },{ value:5, dir:3 },3,0,0,3,3,3,0,0,1],[1,2,0,3,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1]],
	[[3,3,3,3,3,3,3],[3,0,0,3,0,0,3],[3,0,0,2,2,2,3],[3,0,0,2,{ value:5, dir:1 },2,3],[3,0,0,2,2,2,3],[3,0,0,0,0,0,3],[3,3,3,3,3,3,3]],
	[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],[3,0,0,0,0,3,0,0,0,0,0,3,0,0,0,0,3],[3,0,0,0,0,3,0,0,1,0,0,2,0,0,0,0,3],[3,0,0,0,0,3,0,0,0,0,0,3,0,0,0,0,3],[3,0,0,0,0,3,0,3,3,3,0,3,0,0,0,0,3],[3,0,0,0,0,3,0,0,0,0,0,3,0,0,0,0,3],[3,0,0,0,0,2,0,0,1,0,0,3,0,0,0,0,3],[3,0,0,0,0,3,0,0,0,0,0,3,0,0,0,0,3],[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]],
	[[1,1,1,1,1,1,1,1,1,0],[1,0,0,0,3,0,3,0,1,0],[1,0,1,0,1,0,1,0,1,1],[1,0,3,2,1,0,1,0,0,1],[1,0,3,3,3,0,1,1,0,1],[1,0,0,0,0,2,3,0,0,1],[1,0,3,0,0,0,3,0,0,1],[1,0,3,0,3,0,3,2,0,1],[1,0,0,0,3,0,0,0,1,1],[1,1,0,1,1,1,1,1,1,0],[0,1,1,1,0,0,0,0,0,0]],
	[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,2,{ value:5, dir:1 },{ value:5, dir:1 },3,{ value:5, dir:4 },{ value:5, dir:1 },3,3,{ value:5, dir:4 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:1 },0,1],[1,{ value:5, dir:3 },3,{ value:5, dir:3 },{ value:5, dir:1 },{ value:5, dir:4 },{ value:5, dir:3 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:4 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:1 },0,1],[1,{ value:5, dir:3 },{ value:5, dir:4 },{ value:5, dir:1 },{ value:5, dir:3 },{ value:5, dir:4 },{ value:5, dir:4 },{ value:5, dir:1 },0,0,{ value:5, dir:2 },3,{ value:5, dir:3 },{ value:5, dir:1 },0,1],[1,{ value:5, dir:3 },{ value:5, dir:4 },{ value:5, dir:3 },{ value:5, dir:3 },{ value:5, dir:4 },{ value:5, dir:4 },{ value:5, dir:2 },{ value:5, dir:3 },{ value:5, dir:4 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:1 },0,1],[1,{ value:5, dir:3 },{ value:5, dir:4 },{ value:5, dir:3 },{ value:5, dir:3 },{ value:5, dir:4 },{ value:5, dir:4 },{ value:5, dir:3 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:4 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:1 },0,1],[1,{ value:5, dir:3 },{ value:5, dir:4 },{ value:5, dir:3 },{ value:5, dir:3 },1,{ value:5, dir:4 },{ value:5, dir:4 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:1 },0,1],[1,3,{ value:5, dir:2 },{ value:5, dir:3 },{ value:5, dir:3 },{ value:5, dir:1 },{ value:5, dir:4 },{ value:5, dir:4 },{ value:5, dir:3 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:1 },0,1],[1,3,{ value:5, dir:3 },{ value:5, dir:4 },{ value:5, dir:1 },{ value:5, dir:3 },{ value:5, dir:1 },{ value:5, dir:4 },{ value:5, dir:4 },{ value:5, dir:1 },{ value:5, dir:4 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:1 },0,1],[1,3,{ value:5, dir:3 },{ value:5, dir:1 },{ value:5, dir:3 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:2 },{ value:5, dir:3 },{ value:5, dir:1 },1,{ value:5, dir:3 },{ value:5, dir:1 },2,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],
	[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],[3,0,{ value:5, dir:1 },0,0,3,0,{ value:5, dir:3 },2,{ value:5, dir:4 },0,3,0,0,{ value:5, dir:2 },0,3],[3,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,3],[3,0,0,{ value:5, dir:2 },0,0,0,3,0,3,0,0,0,{ value:5, dir:1 },0,0,3],[3,0,0,0,{ value:5, dir:2 },0,0,0,0,0,0,0,{ value:5, dir:1 },0,0,0,3],[3,0,0,3,0,{ value:5, dir:2 },0,3,0,3,0,{ value:5, dir:1 },0,3,0,0,3],[3,0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,3],[3,0,2,0,0,3,0,{ value:5, dir:4 },{ value:5, dir:4 },{ value:5, dir:4 },0,3,0,0,2,0,3],[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]],
	[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],[3,2,2,3,0,0,0,0,3,3,0,0,{ value:5, dir:2 },{ value:5, dir:2 },3,3],[3,2,2,3,0,0,0,0,0,0,0,0,{ value:5, dir:2 },{ value:5, dir:2 },0,3],[3,0,0,0,0,0,0,0,0,3,0,0,3,0,0,3],[3,0,0,0,0,0,3,0,0,0,0,0,0,0,0,3],[3,0,3,3,0,0,3,0,0,0,0,0,0,0,0,3],[3,0,3,0,0,0,0,0,3,3,0,0,3,0,0,3],[3,0,{ value:5, dir:1 },{ value:5, dir:1 },0,0,0,0,0,0,0,0,{ value:5, dir:3 },{ value:5, dir:3 },0,3],[3,0,{ value:5, dir:1 },{ value:5, dir:1 },0,0,0,0,0,0,0,3,{ value:5, dir:3 },{ value:5, dir:3 },3,3],[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]],
	[[3,3,3,3,3,3,3,3,3,3,3,3,3],[3,0,0,0,0,0,0,0,0,0,0,0,3],[3,0,2,{ value:5, dir:4 },0,0,{ value:5, dir:3 },0,0,{ value:5, dir:4 },0,0,3],[3,0,0,{ value:5, dir:4 },0,0,{ value:5, dir:3 },0,0,{ value:5, dir:4 },2,0,3],[3,0,0,{ value:5, dir:4 },0,0,{ value:5, dir:3 },0,0,{ value:5, dir:4 },0,0,3],[3,0,0,{ value:5, dir:4 },0,0,{ value:5, dir:3 },0,0,{ value:5, dir:4 },2,0,3],[3,0,2,{ value:5, dir:4 },0,0,{ value:5, dir:3 },0,0,{ value:5, dir:4 },0,0,3],[3,0,0,0,0,0,0,0,0,0,0,0,3],[3,3,3,3,3,3,3,3,3,3,3,3,3]],
	[[1,1,3,3,3,1,3,1,3,3,3,1,1],[1,2,0,0,0,0,3,0,0,0,0,0,1],[3,0,0,3,0,0,3,0,0,0,0,0,3],[3,0,3,0,0,0,0,0,0,0,3,0,3],[1,0,0,0,3,2,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,2,3,0,0,0,1],[3,0,3,0,0,0,0,0,0,0,3,0,3],[3,0,0,0,0,0,3,0,0,3,0,0,3],[1,0,0,0,0,0,3,0,0,0,0,2,1],[1,1,3,3,3,1,3,1,3,3,3,1,1]],
	[[3,3,1,3,1,3,1,3,1,3,1,3,1,3,3],[3,0,0,0,0,0,0,0,0,0,0,0,0,0,3],[1,2,3,0,1,0,3,0,1,0,3,0,1,0,1],[3,0,0,0,0,0,0,0,0,0,0,0,0,0,3],[3,0,1,0,3,0,1,0,3,0,1,0,3,0,3],[3,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,3,0,1,0,3,0,1,0,3,0,1,0,3],[3,0,0,0,0,0,0,0,0,0,0,0,0,2,3],[3,3,1,3,3,1,3,3,1,3,3,1,3,3,1]],
	[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],[3,0,0,0,0,0,0,0,0,0,0,0,0,0,3],[3,0,3,0,3,0,1,0,3,0,3,2,1,0,3],[3,0,0,0,0,0,0,0,0,0,0,0,0,0,3],[3,0,0,0,1,0,3,0,3,0,1,0,3,0,3],[3,0,2,0,0,0,0,0,0,0,0,0,0,0,3],[3,0,3,0,3,0,3,0,1,0,3,0,3,0,3],[3,0,0,0,0,0,0,0,0,0,0,0,0,0,3],[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]],
	[[1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,{ value:5, dir:3 },0,0,0,{ value:5, dir:4 },0,0,0,{ value:5, dir:4 },0,0,1],[1,{ value:5, dir:1 },0,0,0,{ value:5, dir:2 },3,{ value:5, dir:1 },0,{ value:5, dir:2 },0,{ value:5, dir:1 },0,1],[1,0,0,{ value:5, dir:4 },{ value:5, dir:2 },0,{ value:5, dir:3 },3,3,0,{ value:5, dir:3 },0,3,1],[1,0,{ value:5, dir:2 },3,{ value:5, dir:1 },0,0,3,{ value:5, dir:4 },0,0,0,0,1],[1,{ value:5, dir:3 },0,{ value:5, dir:3 },3,3,0,{ value:5, dir:2 },3,{ value:5, dir:1 },0,0,2,1],[1,0,0,0,0,{ value:5, dir:4 },{ value:5, dir:3 },0,{ value:5, dir:3 },0,3,0,0,1],[1,{ value:5, dir:4 },0,0,{ value:5, dir:2 },0,{ value:5, dir:1 },{ value:5, dir:3 },0,3,0,0,{ value:5, dir:4 },1],[1,0,{ value:5, dir:1 },2,0,{ value:5, dir:3 },3,0,0,0,0,{ value:5, dir:2 },0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1]],
	[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],[3,{ value:5, dir:4 },0,0,0,0,{ value:5, dir:4 },0,0,0,0,{ value:5, dir:1 },0,0,0,{ value:5, dir:4 },3],[3,0,2,0,0,3,0,3,3,3,0,3,0,0,2,0,3],[3,0,3,3,3,3,0,0,3,0,0,3,3,3,3,0,3],[3,0,0,0,0,3,0,0,3,0,0,3,0,0,0,0,3],[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],[3,0,3,0,0,0,{ value:5, dir:3 },3,3,3,0,0,0,0,3,0,3],[3,0,3,3,3,3,0,0,3,0,0,3,3,3,3,0,3],[3,0,3,0,0,0,0,0,3,0,0,0,0,0,3,0,3],[3,{ value:5, dir:2 },0,0,0,0,{ value:5, dir:2 },2,0,0,{ value:5, dir:3 },0,0,0,0,{ value:5, dir:3 },3],[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]],
	[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,2,0,{ value:5, dir:1 },0,3,0,3,0,3,0,{ value:5, dir:1 },0,0,1],[1,0,0,3,0,{ value:5, dir:2 },0,{ value:5, dir:1 },0,{ value:5, dir:2 },0,3,0,0,1],[1,{ value:5, dir:4 },3,0,0,3,0,3,0,3,0,3,0,0,1],[1,0,0,0,3,0,0,3,0,3,0,3,0,0,1],[1,3,{ value:5, dir:3 },3,0,0,3,0,0,3,0,3,0,3,1],[1,0,0,0,0,3,0,0,3,0,0,3,0,3,1],[1,3,{ value:5, dir:4 },3,3,0,0,3,0,0,3,0,0,3,1],[1,0,0,0,0,0,{ value:5, dir:3 },0,0,{ value:5, dir:2 },0,0,3,0,1],[1,3,3,3,3,3,0,0,3,0,0,{ value:5, dir:1 },0,2,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],
	[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,3,3,3,0,{ value:5, dir:4 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:1 },2,1],[1,0,{ value:5, dir:2 },{ value:5, dir:2 },{ value:5, dir:2 },{ value:5, dir:2 },0,3,{ value:5, dir:1 },3,3,0,0,0,{ value:5, dir:4 },1],[1,0,{ value:5, dir:3 },0,3,{ value:5, dir:1 },0,0,0,0,0,{ value:5, dir:4 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:1 },1],[1,{ value:5, dir:2 },0,{ value:5, dir:2 },{ value:5, dir:2 },{ value:5, dir:3 },1,{ value:5, dir:4 },1,1,0,{ value:5, dir:1 },3,0,0,1],[1,{ value:5, dir:3 },0,1,0,{ value:5, dir:3 },1,0,0,1,3,0,0,3,3,1],[1,{ value:5, dir:3 },{ value:5, dir:1 },0,{ value:5, dir:2 },{ value:5, dir:3 },1,0,2,1,3,0,{ value:5, dir:3 },{ value:5, dir:1 },0,1],[1,0,0,{ value:5, dir:3 },0,{ value:5, dir:3 },1,1,1,1,0,0,0,{ value:5, dir:3 },{ value:5, dir:1 },1],[1,3,{ value:5, dir:1 },0,{ value:5, dir:2 },0,{ value:5, dir:2 },0,0,{ value:5, dir:1 },0,0,0,0,{ value:5, dir:3 },1],[1,0,1,2,1,0,0,3,0,{ value:5, dir:3 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:1 },{ value:5, dir:1 },2,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],
	[[1,1,1,1,3,3,3,1,1],[1,3,3,3,0,{ value:5, dir:2 },0,3,3],[1,3,0,0,0,3,0,0,3],[1,2,0,3,{ value:5, dir:3 },{ value:5, dir:1 },0,3,3],[1,3,3,3,{ value:5, dir:2 },3,0,0,3],[1,2,{ value:5, dir:4 },3,0,{ value:5, dir:1 },0,3,3],[1,3,0,0,0,3,0,0,3],[1,3,3,3,0,{ value:5, dir:2 },0,3,3],[1,1,1,1,3,3,3,1,1]],
	[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,3,{ value:5, dir:4 },0,0,3,3,3,0,3,0,0,0,3,3,1],[1,2,{ value:5, dir:4 },3,0,0,0,0,0,3,0,2,0,3,3,1],[1,3,{ value:5, dir:4 },0,3,0,0,3,0,0,0,3,0,0,3,1],[1,0,{ value:5, dir:4 },0,{ value:5, dir:2 },{ value:5, dir:2 },{ value:5, dir:2 },{ value:5, dir:2 },{ value:5, dir:2 },{ value:5, dir:3 },{ value:5, dir:1 },3,0,{ value:5, dir:4 },0,1],[1,0,{ value:5, dir:4 },3,{ value:5, dir:3 },3,0,0,3,0,{ value:5, dir:3 },{ value:5, dir:1 },3,0,3,1],[1,3,0,{ value:5, dir:2 },{ value:5, dir:3 },0,0,3,0,0,3,{ value:5, dir:3 },3,{ value:5, dir:4 },0,1],[1,3,3,0,0,0,0,0,0,0,0,0,{ value:5, dir:1 },0,0,1],[1,3,0,0,{ value:5, dir:3 },3,0,3,0,3,0,0,0,0,0,1],[1,3,3,{ value:5, dir:3 },3,0,{ value:5, dir:4 },3,0,0,3,0,0,3,0,1],[1,3,3,0,{ value:5, dir:1 },0,{ value:5, dir:1 },0,3,0,2,3,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],
	[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,3],[1,0,0,0,0,0,0,0,3,0,0,0,0,0,0,3],[3,0,0,0,3,0,0,0,0,0,0,0,0,0,0,3],[3,0,0,3,3,3,0,0,0,0,0,0,0,0,0,1],[3,0,0,0,3,0,0,0,0,3,2,0,0,0,0,3],[3,2,1,2,0,0,3,0,3,3,3,0,0,0,0,3],[3,0,0,0,3,0,0,0,0,3,2,0,0,0,0,3],[3,0,0,3,3,3,0,0,0,0,0,0,0,0,0,1],[3,0,0,0,3,0,0,0,0,0,0,0,0,0,0,3],[1,0,0,0,0,0,0,0,3,0,0,0,0,0,0,3],[3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,3]],
	[[1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],[3,0,0,0,0,0,0,0,0,0,3,0,0,0,3,0,3],[3,0,0,0,0,2,0,0,0,0,0,0,0,1,0,0,3],[3,0,3,0,0,0,0,0,3,0,0,0,3,0,0,0,3],[3,0,0,3,0,0,0,3,0,0,3,0,0,0,0,3,3],[3,0,0,0,3,0,3,0,0,0,0,1,0,0,0,0,3],[3,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,3],[3,0,2,0,0,3,0,0,2,0,0,0,0,0,0,0,3],[1,0,0,0,0,3,0,0,0,0,0,0,0,0,0,1,1],[1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1]],
	[[3,3,3,3,3,3,3,3,3,3,3],[3,0,{ value:5, dir:4 },0,0,0,0,0,{ value:5, dir:4 },0,3],[3,0,2,0,3,0,3,0,2,0,3],[3,0,0,0,3,0,3,0,0,0,3],[3,0,3,{ value:5, dir:4 },3,0,3,{ value:5, dir:4 },3,0,3],[3,0,0,0,{ value:5, dir:3 },{ value:5, dir:3 },{ value:5, dir:3 },0,0,0,3],[3,0,3,{ value:5, dir:4 },3,0,3,{ value:5, dir:4 },3,0,3],[3,0,3,0,0,0,0,0,3,0,3],[3,0,3,0,3,3,3,0,3,0,3],[3,0,0,0,0,0,0,0,0,0,3],[3,0,3,{ value:5, dir:4 },3,0,3,{ value:5, dir:3 },3,0,3],[3,0,0,0,3,0,3,0,0,0,3],[3,0,0,0,3,{ value:5, dir:3 },3,0,0,0,3],[3,0,3,0,0,0,0,0,3,0,3],[3,0,3,3,0,2,0,3,3,0,3],[3,0,0,0,0,0,0,0,0,0,3],[3,3,3,3,3,3,3,3,3,3,3]],
	[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],[3,0,0,3,0,0,0,0,0,0,{ value:5, dir:3 },0,0,0,0,0,3],[3,0,0,2,3,0,0,0,0,3,0,3,3,3,0,0,3],[3,0,3,0,0,3,0,0,0,3,0,3,0,0,0,0,3],[3,0,0,0,0,0,0,{ value:5, dir:2 },0,0,0,0,0,0,0,0,3],[3,3,3,3,3,3,3,3,3,{ value:5, dir:3 },3,3,3,{ value:5, dir:4 },3,3,3],[3,0,0,0,0,0,0,0,0,{ value:5, dir:3 },0,0,0,0,0,0,3],[3,0,0,2,0,3,0,3,0,0,3,0,0,3,0,0,3],[3,0,0,3,3,3,0,3,0,0,0,3,{ value:5, dir:2 },0,3,0,3],[3,0,0,0,0,0,0,0,0,0,0,0,{ value:5, dir:2 },0,0,0,3],[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]],
	[[3,3,3,3,3,3,3,3,3],[1,0,0,0,1,0,0,0,1],[3,0,0,0,0,0,0,0,3],[3,0,0,3,0,0,0,0,3],[3,0,0,0,0,3,0,0,3],[3,0,0,3,0,0,0,0,3],[3,0,0,3,0,3,0,0,3],[3,0,0,0,0,3,0,0,3],[3,0,0,3,0,0,0,0,3],[3,0,0,3,0,3,0,0,3],[1,0,2,0,2,3,2,0,1],[3,0,0,0,1,0,0,0,3],[3,3,0,0,0,0,0,3,3],[1,1,1,1,1,1,1,1,1]],
	[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,3],[3,0,0,0,0,0,0,{ value:5, dir:4 },0,0,3,0,0,0,0,3],[3,0,2,{ value:5, dir:3 },0,{ value:5, dir:2 },0,0,{ value:5, dir:2 },0,0,{ value:5, dir:2 },{ value:5, dir:3 },{ value:5, dir:2 },0,3],[3,0,0,3,0,0,3,0,0,3,0,0,3,0,0,3],[3,0,0,0,3,0,0,3,3,0,3,0,0,3,0,3],[3,0,2,0,{ value:5, dir:4 },0,0,{ value:5, dir:2 },0,0,{ value:5, dir:2 },0,{ value:5, dir:2 },0,{ value:5, dir:4 },3],[3,0,0,3,0,0,3,0,0,3,0,0,3,0,0,3],[3,0,3,0,3,3,0,0,3,0,3,3,0,0,0,3],[3,0,2,{ value:5, dir:2 },0,0,{ value:5, dir:4 },0,0,{ value:5, dir:2 },0,{ value:5, dir:2 },0,3,0,3],[3,0,0,0,0,0,0,0,{ value:5, dir:3 },0,0,0,0,0,0,3],[3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,3]],
	[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,3,0,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,3,0,1],[1,0,0,3,0,0,3,0,0,3,2,0,0,3,3,0,3,0,0,0,1],[1,0,3,3,0,0,0,0,0,3,3,0,0,0,0,0,3,3,0,3,1],[1,0,0,0,0,0,3,3,0,0,0,0,0,0,3,0,0,0,0,0,1],[1,3,0,3,3,0,3,0,0,3,3,0,3,0,3,0,0,3,0,3,1],[1,0,0,0,0,0,3,0,0,0,0,0,3,0,3,0,3,3,0,0,1],[1,0,2,0,0,0,3,0,0,0,0,0,0,0,3,0,0,3,2,0,1],[1,0,3,3,0,0,3,0,3,3,3,0,0,3,3,0,0,0,0,3,1],[1,3,3,0,0,0,0,0,3,0,0,0,0,0,0,0,0,3,3,3,1],[1,0,0,0,0,3,0,0,0,0,3,0,3,3,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],
	[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,3,3,3,0,0,0,0,3,3,3,3,3,1,1],[1,0,0,0,0,3,0,3,0,0,0,0,0,0,0,3],[3,0,3,3,0,3,0,3,0,3,3,3,1,3,0,3],[3,0,1,2,0,1,0,3,0,1,0,0,2,3,0,3],[3,0,3,3,3,3,0,3,0,3,0,3,3,3,0,3],[3,0,0,0,0,0,0,1,0,3,0,0,0,0,0,1],[3,3,3,3,3,3,0,0,0,3,3,3,3,3,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],
	[[1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[3,0,0,0,3,0,0,0,0,0,0,0,0,3,0,0,0,3],[3,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,3],[3,0,0,0,3,0,2,0,0,0,0,0,0,3,0,0,0,3],[3,0,0,2,1,0,1,3,1,3,1,3,0,1,2,0,0,3],[3,0,0,0,3,0,0,0,0,0,0,2,0,3,0,0,0,3],[3,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,3],[3,0,0,0,3,0,0,0,0,0,0,0,0,3,0,0,0,3],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1]],
	[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,1,0,3,3,0,3,3,3,3,3,3,3,3,1],[1,0,2,0,3,0,0,0,0,0,0,0,0,0,0,0,3,1],[1,0,3,0,3,0,0,0,0,3,3,3,3,3,3,0,3,1],[1,0,0,0,3,0,1,0,0,0,0,0,0,2,3,0,3,3],[1,0,3,0,3,0,0,3,0,0,3,3,3,1,3,0,0,3],[1,0,3,0,0,3,0,0,3,0,0,0,0,0,0,0,3,3],[1,0,3,0,0,0,3,0,0,3,0,0,3,3,0,1,3,3],[1,0,0,0,0,0,0,0,1,3,3,0,0,1,0,0,3,3],[1,3,3,3,3,3,3,3,3,3,0,3,0,0,0,0,0,3],[1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3]],
	[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],[3,0,0,0,0,0,0,0,0,0,0,0,3,0,3],[3,0,3,0,0,3,0,0,3,0,0,1,0,0,3],[3,0,0,0,3,0,0,3,0,0,0,0,0,0,3],[3,0,0,0,0,0,3,0,0,3,0,0,3,0,3],[1,0,3,0,0,3,0,0,3,0,0,3,0,0,3],[3,3,0,0,1,0,0,3,0,0,3,0,0,3,3],[3,0,0,0,0,0,0,2,0,3,2,0,3,0,3],[3,3,3,3,1,3,3,3,3,3,3,3,3,3,3]],
	[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],[3,1,0,0,3,0,3,0,0,3,0,2,0,0,1,3],[3,0,0,3,0,0,0,0,0,0,3,0,0,0,0,3],[3,0,3,0,3,0,1,0,0,1,0,3,0,3,0,3],[3,0,0,0,0,3,0,0,0,0,0,0,3,0,0,3],[3,1,0,0,2,0,3,0,0,3,0,3,0,0,1,3],[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]]
];