<h1>Introduction</h1>

Pop Blocks is a web application used to program the PopBot robot of the MIT Media Lab Personal Robots Group. 

This platform is meant to be used on a tablet with the accompanying PopBots robots. However, you can see what the blocks look like on <a href="http://web.media.mit.edu/~randiw12/popr/scratch-blocks-develop/pop/freespace.html">the live website</a>.

Pop Blocks is based off of the the MIT Media Lab LLK Group's <a href="https://github.com/LLK/scratch-blocks/wiki">Scratch Blocks</a>. Scratch Blocks is based on Google's <a href="https://developers.google.com/blockly">Blockly</a> project. For a full API reference please see Google's Custom Blocks documentation.

<h1>Installation</h1>
Parts taken from Scratch Blocks documentation:
First, download the source code from GitHub. As this project is quickly being updated we recommend you use git but you are more than welcome to download the code directly as well.

Before running the program, you'll need to ensure that you have Google's <a href="https://developers.google.com/closure/compiler/">Closure Library<a/> installed. If you run into any trouble with this step, or see the following dialog please refer to Google's Blockly documentation.

Once you have the code, point your browser at <code>pop/index.html</code> and verify that blocks can be dragged around.


<h1>Extensions to Scratch Blocks</h1>
<ol>
<li>Added toolbox click event -- broke</li>
<li>Added play and stop controls to workspace</li>
<li>Added sounds and looks categories</li>
<li>Added logging of interactions with the toolbox, workspace, and flyout</li>
</ol>

<h1>Making a New Toolbox Category</h1>
<ol>
	<li>Make a new file in ./scratch-blocks-develop/popr_blocks, for example text.js</li>
	<li>Refer to the structure of the other files in the block to create blocks (insert example)</li>
	<li>In ./scratch-blocks-develop/popr_blocks/default_toolbox.xml, add a new category (insert example)</li>
	<li>Within the category, add blocks (insert example)</li>
	<li>In your index file (e.g. ./scratch-blocks-develop/pop/index.html) add the js file, test.js to the list of javascript sources</li>
	<li>Point your browser to your index file and confirm that the new category and blocks appear</li>
</ol>
