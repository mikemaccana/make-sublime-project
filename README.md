`make-sublime-project` makes a Sublime Text .project file that *highlights private npm modules*. This is useful if you're using private modules and want to focus on them, rather than on third party modules.

# Installation

	npm install -g make-sublime-project

# Usage

	cd /Document/your-app
	make-sublime-project

This will create a `your-app.sublime-project` file.

Then in Sublime Text, click **Project** > **Open Project** and select your new .project file.
