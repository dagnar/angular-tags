{"version":3,"file":"dist/angular-tags-0.2.1-tpls.min.js","sources":["generated/tags.js","generated/templates.js"],"names":["angular","module","e","tags","defaultOptions","delimiter","classes","templateUrl","tagTemplateUrl","SRC_REGEXP","kc","enter","esc","backspace","kcCompleteTag","kcRemoveTag","kcCancelInput","id","constant","controller","$scope","$timeout","deletedSrcTags","getClasses","tag","r","toggles","selectedTag","selected","forEach","options","klass","groupName","group","add","idx","i","_add","push","inputTag","$emit","$id","fail","length","name","srcTags","indexOf","splice","addable","selectArea","inputActive","remove","directive","$filter","$rootScope","restrict","require","link","scope","element","attrs","ngModel","delimiterRx","RegExp","cancel","$setViewValue","$render","addTag","value","match","addTags","removeLastTag","orderedTags","$viewValue","orderBy","bind","$$phase","$apply","evt","charCodeAt","which","$watch","newVal","focus","$parsers","unshift","values","split","val","$formatters","$document","$parse","decipherTagsOptions","template","model","srcResult","source","o","locals","obj","pureStrings","stringArray","defaults","copy","userDefaults","parse","input","Error","itemName","viewMapper","modelMapper","format","arr","sanitize","replace","isUndefined","isString","map","item","trim","isArray","isDefined","extend","$eval","oldValue","join","$on","data","src","$parent","isObject","run","$templateCache","put"],"mappings":"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","sourceRoot":"/"}