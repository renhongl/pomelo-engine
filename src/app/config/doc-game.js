export default `
# Game API

The API documentation of Game class, Learn more about the properties
and functions points.


## Properties

| Name | Type| Default | Description|
|:-|:-|:-|-:|
| container|DOM|null|Game container|
|paused| Boolean|false|If the game already paused|
|listeners|Array&lt;Event&gt;|[]|Game listeners|
|sceneManager|SceneManager|{}|Scene manager|


## Methods

|Name|Return|Description|
|:-|:-|-:|
| addListener(&lt;Event&gt; event) |null|Add event listener to game|
|clearListener()|null|Clear all event listeners for game|
|mainLoop()| null|Game main loop for render game things|
|run(&lt;Number&gt; fps)|Number|Run game with gave fps|
|pause()|null|Pause game|
|stop()|null|Stop game|
|showFrames()|null|Add listener for game, render the frame status on game container|
`;
