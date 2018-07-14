# File structure
We already learned how to get started in the first page of this guide. There should be four kind of files that were created when you scaffolded the project:

1. `.json` suffix, JSON config files
2. `.wxml` suffix, WXML templates
3. `.wxss` sufix, WXSS style sheets
4. `.js` suffix, Javascript files

Now we're going to examine the use of each of these individual file types.

## JSON Config files
In the root directory of your project folder there should be an `app.json` file and a `project.config.json` file. Inside of the `pages/logs` folder, there should also be a file `logs.json`. Let's check out what these JSON files are used for.

### app.json
Global config for your mini program goes in the root directory's `app.json`. Global styles, tab bar items, default timeout, routes for all of the pages in your mini program. All of these settings are defined here. The `app.json` from the scaffolded project should look like this: 
```json
{
  "pages":[
    "pages/index/index",
    "pages/logs/logs"
  ],
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "WeChat",
    "navigationBarTextStyle":"black"
  }
}
```
Breakdown of this syntax:

1. *pages* - A list of every page route in your mini program, should correspond to your file structure.
2. *window* - Base global styles and settings for your mini program

To see the nitty-gritty details of how to config your `app.json`, check out the [full documentation](somewhere)

### project.config.json
Developers often like to maintain consistent config of their environment & settings across dev machines & developers. If you reinstall the IDE, you also have to go through config all over again. And that's a headache! So that's why this `project.config.json` file exists--to maintain some configurations for the project across developers and computers.

UI color of the IDE, compile settings, etc. can be defined in this file. This file is created automatically when you set up a project, and changes you make to your environment or IDE will also be written into the `project.config.json`.

### page.json
Each page in your mini program will also have a corresponding JSON config file. **Note**: the name of the file corresponds to the name of the page. For example, our page in `pages/logs` would have a corresponding JSON file called `logs.json`.

You can write page-specific configuration in this file. For example, if you set `navigationBarBackgroundColor` as `#fff` in your global config file `app.json`, you can override that style in `logs.json` to a different color, such as `#47D5C7`.

You can also configure some of the behavior of the page in this file, such as `pullDownRefresh`, etc.