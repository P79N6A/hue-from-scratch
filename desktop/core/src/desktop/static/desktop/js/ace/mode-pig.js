ace.define("ace/mode/pig_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,s=function(){var e="%DECLARE|%DEFAULT|VOID|IMPORT|RETURNS|ARRANGE|DEFINE|LOAD|FILTER|FOREACH|ORDER|CUBE|DISTINCT|COGROUP|CP|CD|DU|JOIN|CROSS|UNION|SPLIT|INTO|IF|OTHERWISE|ALL|AS|BY|USING|INNER|OUTER|ONSCHEMA|PARALLEL|PARTITION|GROUP|AND|ANY|OR|NOT|GENERATE|FLATTEN|ASC|DESC|DESCRIBE|EXPLAIN|IS|STREAM|THROUGH|STORE|MAPREDUCE|SHIP|CACHE|INPUT|OUTPUT|STDERROR|STDIN|STDOUT|LIMIT|SAMPLE|LEFT|RIGHT|FULL|EQ|GT|LT|GTE|LTE|NEQ|MATCHES|TRUE|FALSE|REGISTER|DUMP|EXEC|HELP|ILLUSTRATE|KILL|LS|MKDIR|MV|PIG|PWD|QUIT|RM|RMF|RUN|SET",t="ABS|ACOS|ARITY|ASIN|ATAN|AVG|BAGSIZE|BINSTORAGE|BLOOM|BUILDBLOOM|CBRT|CEIL|CONCAT|COPYFROMLOCAL|COPYTOLOCAL|CAT|COR|COS|COSH|COUNT|COUNT_STAR|COV|CONSTANTSIZE|CUBEDIMENSIONS|DIFF|DISTINCT|DOUBLEABS|DOUBLEAVG|DOUBLEBASE|DOUBLEMAX|DOUBLEMIN|DOUBLEROUND|DOUBLESUM|EXP|FLOOR|FLOATABS|FLOATAVG|FLOATMAX|FLOATMIN|FLOATROUND|FLOATSUM|GENERICINVOKER|INDEXOF|INTABS|INTAVG|INTMAX|INTMIN|INTSUM|INVOKEFORDOUBLE|INVOKEFORFLOAT|INVOKEFORINT|INVOKEFORLONG|INVOKEFORSTRING|INVOKER|ISEMPTY|JSONLOADER|JSONMETADATA|JSONSTORAGE|LAST_INDEX_OF|LCFIRST|LOG|LOG10|LOWER|LONGABS|LONGAVG|LONGMAX|LONGMIN|LONGSUM|MAX|MIN|MAPSIZE|MONITOREDUDF|NONDETERMINISTIC|OUTPUTSCHEMA||PIGSTORAGE|PIGSTREAMING|RANDOM|REGEX_EXTRACT|REGEX_EXTRACT_ALL|REPLACE|ROUND|SIN|SINH|SIZE|SQRT|STRSPLIT|SUBSTRING|SUM|STRINGCONCAT|STRINGMAX|STRINGMIN|STRINGSIZE|TAN|TANH|TOBAG|TOKENIZE|TOMAP|TOP|TOTUPLE|TRIM|TEXTLOADER|TUPLESIZE|UCFIRST|UPPER|UTF8STORAGECONVERTER|EVAL|PIGDUMP|PIGSTORAGE",n=this.createKeywordMapper({keyword:e,"support.function":t},"identifier",!0);this.$rules={start:[{token:"comment.line.double-dash",regex:/--.*$/},{token:"comment.block",regex:/\/\*/,push:[{token:"comment.block",regex:/\*\//,next:"pop"},{defaultToken:"comment.block"}]},{token:"constant.language",regex:/\b(?:null|true|false|stdin|stdout|stderr)\b/,caseInsensitive:!0},{token:"constant.numeric",regex:/\b[\d]+(?:\.[\d]+)?(?:e[\d]+)?[LF]?\b/,caseInsensitive:!0},{token:"string.quoted.double",regex:/"/,push:[{token:"string.quoted.double",regex:/"/,next:"pop"},{token:"constant.character.escape",regex:/\\./},{defaultToken:"string.quoted.double"}]},{token:"string.quoted.single",regex:/'/,push:[{token:"string.quoted.single",regex:/'/,next:"pop"},{token:"constant.character.escape",regex:/\\./},{defaultToken:"string.quoted.single"}]},{token:"string.quoted.other",regex:/`/,push:[{token:"string.quoted.other",regex:/`/,next:"pop"},{token:"constant.character.escape",regex:/\\./},{defaultToken:"string.quoted.other"}]},{token:"keyword.operator.arithmetic",regex:/\+|-|\*|\/|%/},{token:"keyword.operator.bincond",regex:/\?|:/},{token:"keyword.operator.comparison",regex:/==|!=|<=|>=|<|>|\bmatches\b/,caseInsensitive:!0},{token:"keyword.operator.null",regex:/\b(?:is\s+null|is\s+not\s+null)\b/,caseInsensitive:!0},{token:"keyword.operator.boolean",regex:/\b(?:and|or|not)\b/,caseInsensitive:!0},{token:"keyword.operator.relation",regex:/\b::\b/},{token:"keyword.operator.dereference",regex:/\b(?:\.|#)\b/},{token:"keyword.control.conditional",regex:/\b(?:CASE|WHEN|THEN|ELSE|END)\b/,caseInsensitive:!0},{token:"keyword.control.relational",regex:/\b(?:ASSERT|COGROUP|CROSS|CUBE|distinct|filter|foreach|generate|group|join|limit|load|order|sample|split|store|stream|union)\b/,caseInsensitive:!0},{token:"keyword.control.diagnostic",regex:/\b(?:describe|dump|explain|illustrate)\b/,caseInsensitive:!0},{token:"keyword.control.macro",regex:/\b(?:define|import|register)\b/,caseInsensitive:!0},{token:"keyword.control.clause",regex:/\b(?:any|all|asc|arrange|as|asc|by|desc|full|if|inner|into|left|outer|parallel|returns|right|through|using)\b/,caseInsensitive:!0},{token:"support.function.operator",regex:/\bFLATTEN\b/,caseInsensitive:!0},{token:"support.function.operation",regex:/\b(?:CUBE|ROLLUP)\b/,caseInsensitive:!0},{token:"support.function.eval",regex:/\b(?:AVG|CONCAT|COUNT|COUNT_STAR|DIFF|IsEmpty|MAX|MIN|PluckTuple|SIZE|SUBTRACT|SUM|Terms|TOKENIZE|Usage)\b/},{token:"support.function.math",regex:/\b(?:ABS|ACOS|ASIN|ATAN|CBRT|CEIL|COS|COSH|EXP|FLOOR|LOG|LOG10|RANDOM|ROUND|SIN|SINH|SORT|TAN|TANH)\b/},{token:"support.function.string",regex:/\b(?:ENDSWITH|EqualsIgnoreCase|INDEXOF|LAST_INDEX_OF|LCFIRST|LOWER|LTRIM|REGEX_EXTRACT|REGEX_EXTRACT_ALL|REPLACE|RTRIM|STARTSWITH|STRSPLIT|SUBSTRING|TRIM|UCFIRST|UPPER)\b/},{token:"support.function.datetime",regex:/\b(?:AddDuration|CurrentTime|DaysBetween|GetDay|GetHour|GetMilliSecond|GetMinute|GetMonth|GetSecond|GetWeek|GetWeekYear|GetYear|HoursBetween|MilliSecondsBetween|MinutesBetween|MonthsBetween|SecondsBetween|SubtractDuration|ToDate|ToMilliSeconds|ToString|ToUnixTime|WeeksBetween|YearsBetween)\b/},{token:"support.function.tuple",regex:/\b(?:TOTUPLE|TOBAG|TOMAP|TOP)\b/,caseInsensitive:!0},{token:"support.function.macro",regex:/\b(?:input|output|ship|cache)\b/,caseInsensitive:!0},{token:"support.function.storage",regex:/\b(?:AvroStorage|BinStorage|BinaryStorage|HBaseStorage|JsonLoader|JsonStorage|PigDump|PigStorage|PigStreaming|TextLoader|TrevniStorage)\b/,caseInsensitive:!0},{token:"keyword.other.command.shell",regex:/\b(?:fs|sh)\b/,caseInsensitive:!0},{token:"keyword.other.command.shell.file",regex:/\b(?:cat|cd|copyFromLocal|copyToLocal|cp|ls|mkdir|mv|pwd|rm|rmf)\b/,caseInsensitive:!0},{token:"keyword.other.command.shell.utility",regex:/\b(?:clear|exec|help|history|kill|quit|run|set)\b/,caseInsensitive:!0},{token:"storage.type.simple",regex:/\b(?:int|long|float|double|chararray|bytearray|boolean|datetime|biginteger|bigdecimal)\b/,caseInsensitive:!0},{token:"storage.type.complex",regex:/\b(?:tuple|bag|map)\b/,caseInsensitive:!0},{token:"variable.other.positional",regex:/\$[0-9_]+/},{token:"variable.other.alias",regex:/\b[a-z][a-z0-9_]*\b/,caseInsensitive:!0},{token:n,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"}]},this.normalizeRules()};s.metaData={fileTypes:["pig"],name:"Pig Latin",scopeName:"source.pig_latin"},r.inherits(s,i),t.PigLatinHighlightRules=s}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,n){"use strict";var r=e("../../lib/oop"),i=e("../../range").Range,s=e("./fold_mode").FoldMode,o=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(o,s),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var i=this._getFoldWidgetBase(e,t,n);return!i&&this.startRegionRe.test(r)?"start":i},this.getFoldWidgetRange=function(e,t,n,r){var i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);var s=i.match(this.foldingStartMarker);if(s){var o=s.index;if(s[1])return this.openingBracketBlock(e,s[1],n,o);var u=e.getCommentFoldRange(n,o+s[0].length,1);return u&&!u.isMultiLine()&&(r?u=this.getSectionRange(e,n):t!="all"&&(u=null)),u}if(t==="markbegin")return;var s=i.match(this.foldingStopMarker);if(s){var o=s.index+s[0].length;return s[1]?this.closingBracketBlock(e,s[1],n,o):e.getCommentFoldRange(n,o,-1)}},this.getSectionRange=function(e,t){var n=e.getLine(t),r=n.search(/\S/),s=t,o=n.length;t+=1;var u=t,a=e.getLength();while(++t<a){n=e.getLine(t);var f=n.search(/\S/);if(f===-1)continue;if(r>f)break;var l=this.getFoldWidgetRange(e,"all",t);if(l){if(l.start.row<=s)break;if(l.isMultiLine())t=l.end.row;else if(r==f)break}u=t}return new i(s,o,u,e.getLine(u).length)},this.getCommentRegionBlock=function(e,t,n){var r=t.search(/\s*$/),s=e.getLength(),o=n,u=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;while(++n<s){t=e.getLine(n);var f=u.exec(t);if(!f)continue;f[1]?a--:a++;if(!a)break}var l=n;if(l>o)return new i(o,r,l,t.length)}}.call(o.prototype)}),ace.define("ace/mode/pig",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/pig_highlight_rules","ace/mode/folding/cstyle"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text").Mode,s=e("./pig_highlight_rules").PigLatinHighlightRules,o=e("./folding/cstyle").FoldMode,u=function(){this.HighlightRules=s,this.foldingRules=new o};r.inherits(u,i),function(){this.$id="ace/mode/pig",this.getCompletions=function(e,t,n,r){var i=this.$keywordList||this.$createKeywordList();return i.map(function(e){return{ignoreCase:!0,name:e,value:e,upperCaseValue:e.toUpperCase(),score:1,meta:"keyword"}})}}.call(u.prototype),t.Mode=u})