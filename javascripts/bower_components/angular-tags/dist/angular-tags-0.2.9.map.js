{"version":3,"file":"dist/angular-tags-0.2.9.min.js","sources":["generated/tags.js"],"names":["angular","module","e","tags","defaultOptions","delimiter","classes","templateUrl","tagTemplateUrl","SRC_REGEXP","kc","enter","esc","backspace","kcCompleteTag","kcRemoveTag","kcCancelInput","id","constant","controller","$scope","$timeout","$q","getClasses","tag","r","toggles","selectedTag","selected","forEach","options","klass","groupName","group","_filterSrcTags","idx","srcTags","indexOf","splice","_deletedSrcTags","push","reject","add","i","_add","inputTag","$emit","$id","fail","dfrd","defer","length","name","then","addable","resolve","promise","selectArea","inputActive","remove","directive","$filter","$rootScope","restrict","require","link","scope","element","attrs","ngModel","delimiterRx","RegExp","cancel","$setViewValue","$render","addTag","value","match","addTags","removeLastTag","orderedTags","$viewValue","orderBy","bind","$$phase","$apply","evt","charCodeAt","which","$watch","newVal","focus","$parsers","unshift","values","split","val","$formatters","$document","$parse","decipherTagsOptions","template","model","srcResult","source","tagsWatch","srcWatch","modelWatch","pureStrings","stringArray","defaults","copy","userDefaults","parse","input","Error","itemName","sourceName","viewMapper","modelMapper","watchModel","deletedTag","isDefined","format","watchTags","oldValue","map","isArray","join","arr","sanitize","replace","isUndefined","isString","item","trim","updateSrc","locals","o","obj","src","$parent","isFunction","isObject","extend","oldVal","$eval","$on","data","$observe","typeaheadOptions"],"mappings":"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","sourceRoot":"/"}