'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isPlainObject = require('is-plain-object');
var esrever = require('esrever');
var immer = require('immer');
var isEqual = require('fast-deep-equal');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var isPlainObject__default = /*#__PURE__*/_interopDefaultLegacy(isPlainObject);
var isEqual__default = /*#__PURE__*/_interopDefaultLegacy(isEqual);

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var arrayLikeToArray = createCommonjsModule(function (module) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayLikeToArray);

var arrayWithoutHoles = createCommonjsModule(function (module) {
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayWithoutHoles);

var iterableToArray = createCommonjsModule(function (module) {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(iterableToArray);

var unsupportedIterableToArray = createCommonjsModule(function (module) {
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(unsupportedIterableToArray);

var nonIterableSpread = createCommonjsModule(function (module) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(nonIterableSpread);

var toConsumableArray = createCommonjsModule(function (module) {
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _toConsumableArray = unwrapExports(toConsumableArray);

var arrayWithHoles = createCommonjsModule(function (module) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayWithHoles);

var iterableToArrayLimit = createCommonjsModule(function (module) {
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(iterableToArrayLimit);

var nonIterableRest = createCommonjsModule(function (module) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(nonIterableRest);

var slicedToArray = createCommonjsModule(function (module) {
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _slicedToArray = unwrapExports(slicedToArray);

var defineProperty = createCommonjsModule(function (module) {
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _defineProperty = unwrapExports(defineProperty);

var DIRTY_PATHS = new WeakMap();
var FLUSHING = new WeakMap();
var NORMALIZING = new WeakMap();
var PATH_REFS = new WeakMap();
var POINT_REFS = new WeakMap();
var RANGE_REFS = new WeakMap();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Promise = typeof window !== 'undefined' ? window.__Promise || window.Promise : Promise;
/**
 * Create a new Slate `Editor` object.
 */

var createEditor = function createEditor() {
  var editor = {
    children: [],
    operations: [],
    selection: null,
    marks: null,
    isInline: function isInline() {
      return false;
    },
    isVoid: function isVoid() {
      return false;
    },
    onChange: function onChange() {},
    apply: function apply(op) {
      var _iterator = _createForOfIteratorHelper(Editor.pathRefs(editor)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ref = _step.value;
          PathRef.transform(ref, op);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(Editor.pointRefs(editor)),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _ref = _step2.value;
          PointRef.transform(_ref, op);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var _iterator3 = _createForOfIteratorHelper(Editor.rangeRefs(editor)),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _ref2 = _step3.value;
          RangeRef.transform(_ref2, op);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      var set = new Set();
      var dirtyPaths = [];

      var add = function add(path) {
        if (path) {
          var key = path.join(',');

          if (!set.has(key)) {
            set.add(key);
            dirtyPaths.push(path);
          }
        }
      };

      var oldDirtyPaths = DIRTY_PATHS.get(editor) || [];
      var newDirtyPaths = getDirtyPaths(op);

      var _iterator4 = _createForOfIteratorHelper(oldDirtyPaths),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var path = _step4.value;
          var newPath = Path.transform(path, op);
          add(newPath);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      var _iterator5 = _createForOfIteratorHelper(newDirtyPaths),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _path = _step5.value;
          add(_path);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      DIRTY_PATHS.set(editor, dirtyPaths);
      Transforms.transform(editor, op);
      editor.operations.push(op);
      Editor.normalize(editor); // Clear any formats applied to the cursor if the selection changes.

      if (op.type === 'set_selection') {
        editor.marks = null;
      }

      if (!FLUSHING.get(editor)) {
        FLUSHING.set(editor, true);
        Promise.resolve().then(function () {
          FLUSHING.set(editor, false);
          editor.onChange();
          editor.operations = [];
        });
      }
    },
    addMark: function addMark(key, value) {
      var selection = editor.selection;

      if (selection) {
        if (Range.isExpanded(selection)) {
          Transforms.setNodes(editor, _defineProperty({}, key, value), {
            match: Text.isText,
            split: true
          });
        } else {
          var marks = _objectSpread(_objectSpread({}, Editor.marks(editor) || {}), {}, _defineProperty({}, key, value));

          editor.marks = marks;

          if (!FLUSHING.get(editor)) {
            editor.onChange();
          }
        }
      }
    },
    deleteBackward: function deleteBackward(unit) {
      var selection = editor.selection;

      if (selection && Range.isCollapsed(selection)) {
        Transforms["delete"](editor, {
          unit: unit,
          reverse: true
        });
      }
    },
    deleteForward: function deleteForward(unit) {
      var selection = editor.selection;

      if (selection && Range.isCollapsed(selection)) {
        Transforms["delete"](editor, {
          unit: unit
        });
      }
    },
    deleteFragment: function deleteFragment(direction) {
      var selection = editor.selection;

      if (selection && Range.isExpanded(selection)) {
        Transforms["delete"](editor, {
          reverse: direction === 'backward'
        });
      }
    },
    getFragment: function getFragment() {
      var selection = editor.selection;

      if (selection) {
        return Node.fragment(editor, selection);
      }

      return [];
    },
    insertBreak: function insertBreak() {
      Transforms.splitNodes(editor, {
        always: true
      });
    },
    insertFragment: function insertFragment(fragment) {
      Transforms.insertFragment(editor, fragment);
    },
    insertNode: function insertNode(node) {
      Transforms.insertNodes(editor, node);
    },
    insertText: function insertText(text) {
      var selection = editor.selection,
          marks = editor.marks;

      if (selection) {
        // If the cursor is at the end of an inline, move it outside of
        // the inline before inserting
        if (Range.isCollapsed(selection)) {
          var inline = Editor.above(editor, {
            match: function match(n) {
              return Editor.isInline(editor, n);
            },
            mode: 'highest'
          });

          if (inline) {
            var _inline = _slicedToArray(inline, 2),
                inlinePath = _inline[1];

            if (Editor.isEnd(editor, selection.anchor, inlinePath)) {
              var point = Editor.after(editor, inlinePath);
              Transforms.setSelection(editor, {
                anchor: point,
                focus: point
              });
            }
          }
        }

        if (marks) {
          var node = _objectSpread({
            text: text
          }, marks);

          Transforms.insertNodes(editor, node);
        } else {
          Transforms.insertText(editor, text);
        }

        editor.marks = null;
      }
    },
    normalizeNode: function normalizeNode(entry) {
      var _entry = _slicedToArray(entry, 2),
          node = _entry[0],
          path = _entry[1]; // There are no core normalizations for text nodes.


      if (Text.isText(node)) {
        return;
      } // Ensure that block and inline nodes have at least one text child.


      if (Element.isElement(node) && node.children.length === 0) {
        var child = {
          text: ''
        };
        Transforms.insertNodes(editor, child, {
          at: path.concat(0),
          voids: true
        });
        return;
      } // Determine whether the node should have block or inline children.


      var shouldHaveInlines = Editor.isEditor(node) ? false : Element.isElement(node) && (editor.isInline(node) || node.children.length === 0 || Text.isText(node.children[0]) || editor.isInline(node.children[0])); // Since we'll be applying operations while iterating, keep track of an
      // index that accounts for any added/removed nodes.

      var n = 0;

      for (var i = 0; i < node.children.length; i++, n++) {
        var currentNode = Node.get(editor, path);
        if (Text.isText(currentNode)) continue;
        var _child = node.children[i];
        var prev = currentNode.children[n - 1];
        var isLast = i === node.children.length - 1;
        var isInlineOrText = Text.isText(_child) || Element.isElement(_child) && editor.isInline(_child); // Only allow block nodes in the top-level children and parent blocks
        // that only contain block nodes. Similarly, only allow inline nodes in
        // other inline nodes, or parent blocks that only contain inlines and
        // text.

        if (isInlineOrText !== shouldHaveInlines) {
          Transforms.removeNodes(editor, {
            at: path.concat(n),
            voids: true
          });
          n--;
        } else if (Element.isElement(_child)) {
          // Ensure that inline nodes are surrounded by text nodes.
          if (editor.isInline(_child)) {
            if (prev == null || !Text.isText(prev)) {
              var newChild = {
                text: ''
              };
              Transforms.insertNodes(editor, newChild, {
                at: path.concat(n),
                voids: true
              });
              n++;
            } else if (isLast) {
              var _newChild = {
                text: ''
              };
              Transforms.insertNodes(editor, _newChild, {
                at: path.concat(n + 1),
                voids: true
              });
              n++;
            }
          }
        } else {
          // Merge adjacent text nodes that are empty or match.
          if (prev != null && Text.isText(prev)) {
            if (Text.equals(_child, prev, {
              loose: true
            })) {
              Transforms.mergeNodes(editor, {
                at: path.concat(n),
                voids: true
              });
              n--;
            } else if (prev.text === '') {
              Transforms.removeNodes(editor, {
                at: path.concat(n - 1),
                voids: true
              });
              n--;
            } else if (isLast && _child.text === '') {
              Transforms.removeNodes(editor, {
                at: path.concat(n),
                voids: true
              });
              n--;
            }
          }
        }
      }
    },
    removeMark: function removeMark(key) {
      var selection = editor.selection;

      if (selection) {
        if (Range.isExpanded(selection)) {
          Transforms.unsetNodes(editor, key, {
            match: Text.isText,
            split: true
          });
        } else {
          var marks = _objectSpread({}, Editor.marks(editor) || {});

          delete marks[key];
          editor.marks = marks;

          if (!FLUSHING.get(editor)) {
            editor.onChange();
          }
        }
      }
    }
  };
  return editor;
};
/**
 * Get the "dirty" paths generated from an operation.
 */

var getDirtyPaths = function getDirtyPaths(op) {
  switch (op.type) {
    case 'insert_text':
    case 'remove_text':
    case 'set_node':
      {
        var path = op.path;
        return Path.levels(path);
      }

    case 'insert_node':
      {
        var node = op.node,
            _path2 = op.path;
        var levels = Path.levels(_path2);
        var descendants = Text.isText(node) ? [] : Array.from(Node.nodes(node), function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              p = _ref4[1];

          return _path2.concat(p);
        });
        return [].concat(_toConsumableArray(levels), _toConsumableArray(descendants));
      }

    case 'merge_node':
      {
        var _path3 = op.path;
        var ancestors = Path.ancestors(_path3);
        var previousPath = Path.previous(_path3);
        return [].concat(_toConsumableArray(ancestors), [previousPath]);
      }

    case 'move_node':
      {
        var _path4 = op.path,
            newPath = op.newPath;

        if (Path.equals(_path4, newPath)) {
          return [];
        }

        var oldAncestors = [];
        var newAncestors = [];

        var _iterator6 = _createForOfIteratorHelper(Path.ancestors(_path4)),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var ancestor = _step6.value;
            var p = Path.transform(ancestor, op);
            oldAncestors.push(p);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        var _iterator7 = _createForOfIteratorHelper(Path.ancestors(newPath)),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _ancestor = _step7.value;

            var _p = Path.transform(_ancestor, op);

            newAncestors.push(_p);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        var newParent = newAncestors[newAncestors.length - 1];
        var newIndex = newPath[newPath.length - 1];
        var resultPath = newParent.concat(newIndex);
        return [].concat(oldAncestors, newAncestors, [resultPath]);
      }

    case 'remove_node':
      {
        var _path5 = op.path;

        var _ancestors = Path.ancestors(_path5);

        return _toConsumableArray(_ancestors);
      }

    case 'split_node':
      {
        var _path6 = op.path;

        var _levels = Path.levels(_path6);

        var nextPath = Path.next(_path6);
        return [].concat(_toConsumableArray(_levels), [nextPath]);
      }

    default:
      {
        return [];
      }
  }
};

var objectWithoutPropertiesLoose = createCommonjsModule(function (module) {
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(objectWithoutPropertiesLoose);

var objectWithoutProperties = createCommonjsModule(function (module) {
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _objectWithoutProperties = unwrapExports(objectWithoutProperties);

/**
 * Constants for string distance checking.
 */
var SPACE = /\s/;
var PUNCTUATION = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
var CHAMELEON = /['\u2018\u2019]/;
var SURROGATE_START = 0xd800;
var SURROGATE_END = 0xdfff;
var ZERO_WIDTH_JOINER = 0x200d;
/**
 * Get the distance to the end of the first character in a string of text.
 */

var getCharacterDistance = function getCharacterDistance(text) {
  var offset = 0; // prev types:
  // SURR: surrogate pair
  // MOD: modifier (technically also surrogate pair)
  // ZWJ: zero width joiner
  // VAR: variation selector
  // BMP: sequenceable character from basic multilingual plane

  var prev = null;
  var charCode = text.charCodeAt(0);

  while (charCode) {
    if (isSurrogate(charCode)) {
      var modifier = isModifier(charCode, text, offset); // Early returns are the heart of this function, where we decide if previous and current
      // codepoints should form a single character (in terms of how many of them should selection
      // jump over).

      if (prev === 'SURR' || prev === 'BMP') {
        break;
      }

      offset += 2;
      prev = modifier ? 'MOD' : 'SURR';
      charCode = text.charCodeAt(offset); // Absolutely fine to `continue` without any checks because if `charCode` is NaN (which
      // is the case when out of `text` range), next `while` loop won"t execute and we"re done.

      continue;
    }

    if (charCode === ZERO_WIDTH_JOINER) {
      offset += 1;
      prev = 'ZWJ';
      charCode = text.charCodeAt(offset);
      continue;
    }

    if (isBMPEmoji(charCode)) {
      if (prev && prev !== 'ZWJ' && prev !== 'VAR') {
        break;
      }

      offset += 1;
      prev = 'BMP';
      charCode = text.charCodeAt(offset);
      continue;
    }

    if (isVariationSelector(charCode)) {
      if (prev && prev !== 'ZWJ') {
        break;
      }

      offset += 1;
      prev = 'VAR';
      charCode = text.charCodeAt(offset);
      continue;
    } // Modifier 'groups up' with what ever character is before that (even whitespace), need to
    // look ahead.


    if (prev === 'MOD') {
      offset += 1;
      break;
    } // If while loop ever gets here, we're done (e.g latin chars).


    break;
  }

  return offset || 1;
};
/**
 * Get the distance to the end of the first word in a string of text.
 */

var getWordDistance = function getWordDistance(text) {
  var length = 0;
  var i = 0;
  var started = false;

  var _char;

  while (_char = text.charAt(i)) {
    var l = getCharacterDistance(_char);
    _char = text.slice(i, i + l);
    var rest = text.slice(i + l);

    if (isWordCharacter(_char, rest)) {
      started = true;
      length += l;
    } else if (!started) {
      length += l;
    } else {
      break;
    }

    i += l;
  }

  return length;
};
/**
 * Check if a character is a word character. The `remaining` argument is used
 * because sometimes you must read subsequent characters to truly determine it.
 */

var isWordCharacter = function isWordCharacter(_char2, remaining) {
  if (SPACE.test(_char2)) {
    return false;
  } // Chameleons count as word characters as long as they're in a word, so
  // recurse to see if the next one is a word character or not.


  if (CHAMELEON.test(_char2)) {
    var next = remaining.charAt(0);
    var length = getCharacterDistance(next);
    next = remaining.slice(0, length);
    var rest = remaining.slice(length);

    if (isWordCharacter(next, rest)) {
      return true;
    }
  }

  if (PUNCTUATION.test(_char2)) {
    return false;
  }

  return true;
};
/**
 * Determines if `code` is a surrogate
 */


var isSurrogate = function isSurrogate(code) {
  return SURROGATE_START <= code && code <= SURROGATE_END;
};
/**
 * Does `code` form Modifier with next one.
 *
 * https://emojipedia.org/modifiers/
 */


var isModifier = function isModifier(code, text, offset) {
  if (code === 0xd83c) {
    var next = text.charCodeAt(offset + 1);
    return next <= 0xdfff && next >= 0xdffb;
  }

  return false;
};
/**
 * Is `code` a Variation Selector.
 *
 * https://codepoints.net/variation_selectors
 */


var isVariationSelector = function isVariationSelector(code) {
  return code <= 0xfe0f && code >= 0xfe00;
};
/**
 * Is `code` one of the BMP codes used in emoji sequences.
 *
 * https://emojipedia.org/emoji-zwj-sequences/
 */


var isBMPEmoji = function isBMPEmoji(code) {
  // This requires tiny bit of maintanance, better ideas?
  // Fortunately it only happens if new Unicode Standard
  // is released. Fails gracefully if upkeep lags behind,
  // same way Slate previously behaved with all emojis.
  return code === 0x2764 || // heart (❤)
  code === 0x2642 || // male (♂)
  code === 0x2640 || // female (♀)
  code === 0x2620 || // scull (☠)
  code === 0x2695 || // medical (⚕)
  code === 0x2708 || // plane (✈️)
  code === 0x25ef // large circle (◯)
  ;
};

var Element = {
  /**
   * Check if a value implements the 'Ancestor' interface.
   */
  isAncestor: function isAncestor(value) {
    return isPlainObject__default['default'](value) && Node.isNodeList(value.children);
  },

  /**
   * Check if a value implements the `Element` interface.
   */
  isElement: function isElement(value) {
    return isPlainObject__default['default'](value) && Node.isNodeList(value.children) && !Editor.isEditor(value);
  },

  /**
   * Check if a value is an array of `Element` objects.
   */
  isElementList: function isElementList(value) {
    return Array.isArray(value) && value.every(function (val) {
      return Element.isElement(val);
    });
  },

  /**
   * Check if a set of props is a partial of Element.
   */
  isElementProps: function isElementProps(props) {
    return props.children !== undefined;
  },

  /**
   * Check if an element matches set of properties.
   *
   * Note: this checks custom properties, and it does not ensure that any
   * children are equivalent.
   */
  matches: function matches(element, props) {
    for (var key in props) {
      if (key === 'children') {
        continue;
      }

      if (element[key] !== props[key]) {
        return false;
      }
    }

    return true;
  }
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var IS_EDITOR_CACHE = new WeakMap();
var Editor = {
  /**
   * Get the ancestor above a location in the document.
   */
  above: function above(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$voids = options.voids,
        voids = _options$voids === void 0 ? false : _options$voids,
        _options$mode = options.mode,
        mode = _options$mode === void 0 ? 'lowest' : _options$mode,
        _options$at = options.at,
        at = _options$at === void 0 ? editor.selection : _options$at,
        match = options.match;

    if (!at) {
      return;
    }

    var path = Editor.path(editor, at);
    var reverse = mode === 'lowest';

    var _iterator = _createForOfIteratorHelper$1(Editor.levels(editor, {
      at: path,
      voids: voids,
      match: match,
      reverse: reverse
    })),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            n = _step$value[0],
            p = _step$value[1];

        if (!Text.isText(n) && !Path.equals(path, p)) {
          return [n, p];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  },

  /**
   * Add a custom property to the leaf text nodes in the current selection.
   *
   * If the selection is currently collapsed, the marks will be added to the
   * `editor.marks` property instead, and applied when text is inserted next.
   */
  addMark: function addMark(editor, key, value) {
    editor.addMark(key, value);
  },

  /**
   * Get the point after a location.
   */
  after: function after(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var anchor = Editor.point(editor, at, {
      edge: 'end'
    });
    var focus = Editor.end(editor, []);
    var range = {
      anchor: anchor,
      focus: focus
    };
    var _options$distance = options.distance,
        distance = _options$distance === void 0 ? 1 : _options$distance;
    var d = 0;
    var target;

    var _iterator2 = _createForOfIteratorHelper$1(Editor.positions(editor, _objectSpread$1(_objectSpread$1({}, options), {}, {
      at: range
    }))),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var p = _step2.value;

        if (d > distance) {
          break;
        }

        if (d !== 0) {
          target = p;
        }

        d++;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return target;
  },

  /**
   * Get the point before a location.
   */
  before: function before(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var anchor = Editor.start(editor, []);
    var focus = Editor.point(editor, at, {
      edge: 'start'
    });
    var range = {
      anchor: anchor,
      focus: focus
    };
    var _options$distance2 = options.distance,
        distance = _options$distance2 === void 0 ? 1 : _options$distance2;
    var d = 0;
    var target;

    var _iterator3 = _createForOfIteratorHelper$1(Editor.positions(editor, _objectSpread$1(_objectSpread$1({}, options), {}, {
      at: range,
      reverse: true
    }))),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var p = _step3.value;

        if (d > distance) {
          break;
        }

        if (d !== 0) {
          target = p;
        }

        d++;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    return target;
  },

  /**
   * Delete content in the editor backward from the current selection.
   */
  deleteBackward: function deleteBackward(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$unit = options.unit,
        unit = _options$unit === void 0 ? 'character' : _options$unit;
    editor.deleteBackward(unit);
  },

  /**
   * Delete content in the editor forward from the current selection.
   */
  deleteForward: function deleteForward(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$unit2 = options.unit,
        unit = _options$unit2 === void 0 ? 'character' : _options$unit2;
    editor.deleteForward(unit);
  },

  /**
   * Delete the content in the current selection.
   */
  deleteFragment: function deleteFragment(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$direction = options.direction,
        direction = _options$direction === void 0 ? 'forward' : _options$direction;
    editor.deleteFragment(direction);
  },

  /**
   * Get the start and end points of a location.
   */
  edges: function edges(editor, at) {
    return [Editor.start(editor, at), Editor.end(editor, at)];
  },

  /**
   * Get the end point of a location.
   */
  end: function end(editor, at) {
    return Editor.point(editor, at, {
      edge: 'end'
    });
  },

  /**
   * Get the first node at a location.
   */
  first: function first(editor, at) {
    var path = Editor.path(editor, at, {
      edge: 'start'
    });
    return Editor.node(editor, path);
  },

  /**
   * Get the fragment at a location.
   */
  fragment: function fragment(editor, at) {
    var range = Editor.range(editor, at);
    var fragment = Node.fragment(editor, range);
    return fragment;
  },

  /**
   * Check if a node has block children.
   */
  hasBlocks: function hasBlocks(editor, element) {
    return element.children.some(function (n) {
      return Editor.isBlock(editor, n);
    });
  },

  /**
   * Check if a node has inline and text children.
   */
  hasInlines: function hasInlines(editor, element) {
    return element.children.some(function (n) {
      return Text.isText(n) || Editor.isInline(editor, n);
    });
  },

  /**
   * Check if a node has text children.
   */
  hasTexts: function hasTexts(editor, element) {
    return element.children.every(function (n) {
      return Text.isText(n);
    });
  },

  /**
   * Insert a block break at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */
  insertBreak: function insertBreak(editor) {
    editor.insertBreak();
  },

  /**
   * Insert a fragment at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */
  insertFragment: function insertFragment(editor, fragment) {
    editor.insertFragment(fragment);
  },

  /**
   * Insert a node at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */
  insertNode: function insertNode(editor, node) {
    editor.insertNode(node);
  },

  /**
   * Insert text at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */
  insertText: function insertText(editor, text) {
    editor.insertText(text);
  },

  /**
   * Check if a value is a block `Element` object.
   */
  isBlock: function isBlock(editor, value) {
    return Element.isElement(value) && !editor.isInline(value);
  },

  /**
   * Check if a value is an `Editor` object.
   */
  isEditor: function isEditor(value) {
    if (!isPlainObject__default['default'](value)) return false;
    var cachedIsEditor = IS_EDITOR_CACHE.get(value);

    if (cachedIsEditor !== undefined) {
      return cachedIsEditor;
    }

    var isEditor = typeof value.addMark === 'function' && typeof value.apply === 'function' && typeof value.deleteBackward === 'function' && typeof value.deleteForward === 'function' && typeof value.deleteFragment === 'function' && typeof value.insertBreak === 'function' && typeof value.insertFragment === 'function' && typeof value.insertNode === 'function' && typeof value.insertText === 'function' && typeof value.isInline === 'function' && typeof value.isVoid === 'function' && typeof value.normalizeNode === 'function' && typeof value.onChange === 'function' && typeof value.removeMark === 'function' && (value.marks === null || isPlainObject__default['default'](value.marks)) && (value.selection === null || Range.isRange(value.selection)) && Node.isNodeList(value.children) && Operation.isOperationList(value.operations);
    IS_EDITOR_CACHE.set(value, isEditor);
    return isEditor;
  },

  /**
   * Check if a point is the end point of a location.
   */
  isEnd: function isEnd(editor, point, at) {
    var end = Editor.end(editor, at);
    return Point.equals(point, end);
  },

  /**
   * Check if a point is an edge of a location.
   */
  isEdge: function isEdge(editor, point, at) {
    return Editor.isStart(editor, point, at) || Editor.isEnd(editor, point, at);
  },

  /**
   * Check if an element is empty, accounting for void nodes.
   */
  isEmpty: function isEmpty(editor, element) {
    var children = element.children;

    var _children = _slicedToArray(children, 1),
        first = _children[0];

    return children.length === 0 || children.length === 1 && Text.isText(first) && first.text === '' && !editor.isVoid(element);
  },

  /**
   * Check if a value is an inline `Element` object.
   */
  isInline: function isInline(editor, value) {
    return Element.isElement(value) && editor.isInline(value);
  },

  /**
   * Check if the editor is currently normalizing after each operation.
   */
  isNormalizing: function isNormalizing(editor) {
    var isNormalizing = NORMALIZING.get(editor);
    return isNormalizing === undefined ? true : isNormalizing;
  },

  /**
   * Check if a point is the start point of a location.
   */
  isStart: function isStart(editor, point, at) {
    // PERF: If the offset isn't `0` we know it's not the start.
    if (point.offset !== 0) {
      return false;
    }

    var start = Editor.start(editor, at);
    return Point.equals(point, start);
  },

  /**
   * Check if a value is a void `Element` object.
   */
  isVoid: function isVoid(editor, value) {
    return Element.isElement(value) && editor.isVoid(value);
  },

  /**
   * Get the last node at a location.
   */
  last: function last(editor, at) {
    var path = Editor.path(editor, at, {
      edge: 'end'
    });
    return Editor.node(editor, path);
  },

  /**
   * Get the leaf text node at a location.
   */
  leaf: function leaf(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var node = Node.leaf(editor, path);
    return [node, path];
  },

  /**
   * Iterate through all of the levels at a location.
   */
  levels: function* levels(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$at2 = options.at,
        at = _options$at2 === void 0 ? editor.selection : _options$at2,
        _options$reverse = options.reverse,
        reverse = _options$reverse === void 0 ? false : _options$reverse,
        _options$voids2 = options.voids,
        voids = _options$voids2 === void 0 ? false : _options$voids2;
    var match = options.match;

    if (match == null) {
      match = function match() {
        return true;
      };
    }

    if (!at) {
      return;
    }

    var levels = [];
    var path = Editor.path(editor, at);

    var _iterator4 = _createForOfIteratorHelper$1(Node.levels(editor, path)),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _step4$value = _slicedToArray(_step4.value, 2),
            n = _step4$value[0],
            p = _step4$value[1];

        if (!match(n, p)) {
          continue;
        }

        levels.push([n, p]);

        if (!voids && Editor.isVoid(editor, n)) {
          break;
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    if (reverse) {
      levels.reverse();
    }

    yield* levels;
  },

  /**
   * Get the marks that would be added to text at the current selection.
   */
  marks: function marks(editor) {
    var marks = editor.marks,
        selection = editor.selection;

    if (!selection) {
      return null;
    }

    if (marks) {
      return marks;
    }

    if (Range.isExpanded(selection)) {
      var _Editor$nodes = Editor.nodes(editor, {
        match: Text.isText
      }),
          _Editor$nodes2 = _slicedToArray(_Editor$nodes, 1),
          match = _Editor$nodes2[0];

      if (match) {
        var _match = _slicedToArray(match, 1),
            _node = _match[0];

        var _text = _node.text,
            _rest = _objectWithoutProperties(_node, ["text"]);

        return _rest;
      } else {
        return {};
      }
    }

    var anchor = selection.anchor;
    var path = anchor.path;

    var _Editor$leaf = Editor.leaf(editor, path),
        _Editor$leaf2 = _slicedToArray(_Editor$leaf, 1),
        node = _Editor$leaf2[0];

    if (anchor.offset === 0) {
      var prev = Editor.previous(editor, {
        at: path,
        match: Text.isText
      });
      var block = Editor.above(editor, {
        match: function match(n) {
          return Editor.isBlock(editor, n);
        }
      });

      if (prev && block) {
        var _prev = _slicedToArray(prev, 2),
            prevNode = _prev[0],
            prevPath = _prev[1];

        var _block = _slicedToArray(block, 2),
            blockPath = _block[1];

        if (Path.isAncestor(blockPath, prevPath)) {
          node = prevNode;
        }
      }
    }

    var _node2 = node,
        text = _node2.text,
        rest = _objectWithoutProperties(_node2, ["text"]);

    return rest;
  },

  /**
   * Get the matching node in the branch of the document after a location.
   */
  next: function next(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$mode2 = options.mode,
        mode = _options$mode2 === void 0 ? 'lowest' : _options$mode2,
        _options$voids3 = options.voids,
        voids = _options$voids3 === void 0 ? false : _options$voids3;
    var match = options.match,
        _options$at3 = options.at,
        at = _options$at3 === void 0 ? editor.selection : _options$at3;

    if (!at) {
      return;
    }

    var pointAfterLocation = Editor.after(editor, at, {
      voids: voids
    });
    if (!pointAfterLocation) return;

    var _Editor$last = Editor.last(editor, []),
        _Editor$last2 = _slicedToArray(_Editor$last, 2),
        to = _Editor$last2[1];

    var span = [pointAfterLocation.path, to];

    if (Path.isPath(at) && at.length === 0) {
      throw new Error("Cannot get the next node from the root node!");
    }

    if (match == null) {
      if (Path.isPath(at)) {
        var _Editor$parent = Editor.parent(editor, at),
            _Editor$parent2 = _slicedToArray(_Editor$parent, 1),
            parent = _Editor$parent2[0];

        match = function match(n) {
          return parent.children.includes(n);
        };
      } else {
        match = function match() {
          return true;
        };
      }
    }

    var _Editor$nodes3 = Editor.nodes(editor, {
      at: span,
      match: match,
      mode: mode,
      voids: voids
    }),
        _Editor$nodes4 = _slicedToArray(_Editor$nodes3, 1),
        next = _Editor$nodes4[0];

    return next;
  },

  /**
   * Get the node at a location.
   */
  node: function node(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var node = Node.get(editor, path);
    return [node, path];
  },

  /**
   * Iterate through all of the nodes in the Editor.
   */
  nodes: function* nodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$at4 = options.at,
        at = _options$at4 === void 0 ? editor.selection : _options$at4,
        _options$mode3 = options.mode,
        mode = _options$mode3 === void 0 ? 'all' : _options$mode3,
        _options$universal = options.universal,
        universal = _options$universal === void 0 ? false : _options$universal,
        _options$reverse2 = options.reverse,
        reverse = _options$reverse2 === void 0 ? false : _options$reverse2,
        _options$voids4 = options.voids,
        voids = _options$voids4 === void 0 ? false : _options$voids4;
    var match = options.match;

    if (!match) {
      match = function match() {
        return true;
      };
    }

    if (!at) {
      return;
    }

    var from;
    var to;

    if (Span.isSpan(at)) {
      from = at[0];
      to = at[1];
    } else {
      var first = Editor.path(editor, at, {
        edge: 'start'
      });
      var last = Editor.path(editor, at, {
        edge: 'end'
      });
      from = reverse ? last : first;
      to = reverse ? first : last;
    }

    var nodeEntries = Node.nodes(editor, {
      reverse: reverse,
      from: from,
      to: to,
      pass: function pass(_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            n = _ref2[0];

        return voids ? false : Editor.isVoid(editor, n);
      }
    });
    var matches = [];
    var hit;

    var _iterator5 = _createForOfIteratorHelper$1(nodeEntries),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _step5$value = _slicedToArray(_step5.value, 2),
            node = _step5$value[0],
            path = _step5$value[1];

        var isLower = hit && Path.compare(path, hit[1]) === 0; // In highest mode any node lower than the last hit is not a match.

        if (mode === 'highest' && isLower) {
          continue;
        }

        if (!match(node, path)) {
          // If we've arrived at a leaf text node that is not lower than the last
          // hit, then we've found a branch that doesn't include a match, which
          // means the match is not universal.
          if (universal && !isLower && Text.isText(node)) {
            return;
          } else {
            continue;
          }
        } // If there's a match and it's lower than the last, update the hit.


        if (mode === 'lowest' && isLower) {
          hit = [node, path];
          continue;
        } // In lowest mode we emit the last hit, once it's guaranteed lowest.


        var emit = mode === 'lowest' ? hit : [node, path];

        if (emit) {
          if (universal) {
            matches.push(emit);
          } else {
            yield emit;
          }
        }

        hit = [node, path];
      } // Since lowest is always emitting one behind, catch up at the end.

    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    if (mode === 'lowest' && hit) {
      if (universal) {
        matches.push(hit);
      } else {
        yield hit;
      }
    } // Universal defers to ensure that the match occurs in every branch, so we
    // yield all of the matches after iterating.


    if (universal) {
      yield* matches;
    }
  },

  /**
   * Normalize any dirty objects in the editor.
   */
  normalize: function normalize(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$force = options.force,
        force = _options$force === void 0 ? false : _options$force;

    var getDirtyPaths = function getDirtyPaths(editor) {
      return DIRTY_PATHS.get(editor) || [];
    };

    if (!Editor.isNormalizing(editor)) {
      return;
    }

    if (force) {
      var allPaths = Array.from(Node.nodes(editor), function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            p = _ref4[1];

        return p;
      });
      DIRTY_PATHS.set(editor, allPaths);
    }

    if (getDirtyPaths(editor).length === 0) {
      return;
    }

    Editor.withoutNormalizing(editor, function () {
      /*
        Fix dirty elements with no children.
        editor.normalizeNode() does fix this, but some normalization fixes also require it to work.
        Running an initial pass avoids the catch-22 race condition.
      */
      var _iterator6 = _createForOfIteratorHelper$1(getDirtyPaths(editor)),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _dirtyPath = _step6.value;

          if (Node.has(editor, _dirtyPath)) {
            var _Editor$node = Editor.node(editor, _dirtyPath),
                _Editor$node2 = _slicedToArray(_Editor$node, 2),
                node = _Editor$node2[0],
                _ = _Editor$node2[1]; // Add a text child to elements with no children.
            // This is safe to do in any order, by definition it can't cause other paths to change.


            if (Element.isElement(node) && node.children.length === 0) {
              var child = {
                text: ''
              };
              Transforms.insertNodes(editor, child, {
                at: _dirtyPath.concat(0),
                voids: true
              });
            }
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      var max = getDirtyPaths(editor).length * 42; // HACK: better way?

      var m = 0;

      while (getDirtyPaths(editor).length !== 0) {
        if (m > max) {
          throw new Error("\n            Could not completely normalize the editor after ".concat(max, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.\n          "));
        }

        var dirtyPath = getDirtyPaths(editor).pop(); // If the node doesn't exist in the tree, it does not need to be normalized.

        if (Node.has(editor, dirtyPath)) {
          var entry = Editor.node(editor, dirtyPath);
          editor.normalizeNode(entry);
        }

        m++;
      }
    });
  },

  /**
   * Get the parent node of a location.
   */
  parent: function parent(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var parentPath = Path.parent(path);
    var entry = Editor.node(editor, parentPath);
    return entry;
  },

  /**
   * Get the path of a location.
   */
  path: function path(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var depth = options.depth,
        edge = options.edge;

    if (Path.isPath(at)) {
      if (edge === 'start') {
        var _Node$first = Node.first(editor, at),
            _Node$first2 = _slicedToArray(_Node$first, 2),
            firstPath = _Node$first2[1];

        at = firstPath;
      } else if (edge === 'end') {
        var _Node$last = Node.last(editor, at),
            _Node$last2 = _slicedToArray(_Node$last, 2),
            lastPath = _Node$last2[1];

        at = lastPath;
      }
    }

    if (Range.isRange(at)) {
      if (edge === 'start') {
        at = Range.start(at);
      } else if (edge === 'end') {
        at = Range.end(at);
      } else {
        at = Path.common(at.anchor.path, at.focus.path);
      }
    }

    if (Point.isPoint(at)) {
      at = at.path;
    }

    if (depth != null) {
      at = at.slice(0, depth);
    }

    return at;
  },
  hasPath: function hasPath(editor, path) {
    return Node.has(editor, path);
  },

  /**
   * Create a mutable ref for a `Path` object, which will stay in sync as new
   * operations are applied to the editor.
   */
  pathRef: function pathRef(editor, path) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _options$affinity = options.affinity,
        affinity = _options$affinity === void 0 ? 'forward' : _options$affinity;
    var ref = {
      current: path,
      affinity: affinity,
      unref: function unref() {
        var current = ref.current;
        var pathRefs = Editor.pathRefs(editor);
        pathRefs["delete"](ref);
        ref.current = null;
        return current;
      }
    };
    var refs = Editor.pathRefs(editor);
    refs.add(ref);
    return ref;
  },

  /**
   * Get the set of currently tracked path refs of the editor.
   */
  pathRefs: function pathRefs(editor) {
    var refs = PATH_REFS.get(editor);

    if (!refs) {
      refs = new Set();
      PATH_REFS.set(editor, refs);
    }

    return refs;
  },

  /**
   * Get the start or end point of a location.
   */
  point: function point(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _options$edge = options.edge,
        edge = _options$edge === void 0 ? 'start' : _options$edge;

    if (Path.isPath(at)) {
      var path;

      if (edge === 'end') {
        var _Node$last3 = Node.last(editor, at),
            _Node$last4 = _slicedToArray(_Node$last3, 2),
            lastPath = _Node$last4[1];

        path = lastPath;
      } else {
        var _Node$first3 = Node.first(editor, at),
            _Node$first4 = _slicedToArray(_Node$first3, 2),
            firstPath = _Node$first4[1];

        path = firstPath;
      }

      var node = Node.get(editor, path);

      if (!Text.isText(node)) {
        throw new Error("Cannot get the ".concat(edge, " point in the node at path [").concat(at, "] because it has no ").concat(edge, " text node."));
      }

      return {
        path: path,
        offset: edge === 'end' ? node.text.length : 0
      };
    }

    if (Range.isRange(at)) {
      var _Range$edges = Range.edges(at),
          _Range$edges2 = _slicedToArray(_Range$edges, 2),
          start = _Range$edges2[0],
          end = _Range$edges2[1];

      return edge === 'start' ? start : end;
    }

    return at;
  },

  /**
   * Create a mutable ref for a `Point` object, which will stay in sync as new
   * operations are applied to the editor.
   */
  pointRef: function pointRef(editor, point) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _options$affinity2 = options.affinity,
        affinity = _options$affinity2 === void 0 ? 'forward' : _options$affinity2;
    var ref = {
      current: point,
      affinity: affinity,
      unref: function unref() {
        var current = ref.current;
        var pointRefs = Editor.pointRefs(editor);
        pointRefs["delete"](ref);
        ref.current = null;
        return current;
      }
    };
    var refs = Editor.pointRefs(editor);
    refs.add(ref);
    return ref;
  },

  /**
   * Get the set of currently tracked point refs of the editor.
   */
  pointRefs: function pointRefs(editor) {
    var refs = POINT_REFS.get(editor);

    if (!refs) {
      refs = new Set();
      POINT_REFS.set(editor, refs);
    }

    return refs;
  },

  /**
   * Return all the positions in `at` range where a `Point` can be placed.
   *
   * By default, moves forward by individual offsets at a time, but
   * the `unit` option can be used to to move by character, word, line, or block.
   *
   * The `reverse` option can be used to change iteration direction.
   *
   * Note: By default void nodes are treated as a single point and iteration
   * will not happen inside their content unless you pass in true for the
   * `voids` option, then iteration will occur.
   */
  positions: function* positions(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$at5 = options.at,
        at = _options$at5 === void 0 ? editor.selection : _options$at5,
        _options$unit3 = options.unit,
        unit = _options$unit3 === void 0 ? 'offset' : _options$unit3,
        _options$reverse3 = options.reverse,
        reverse = _options$reverse3 === void 0 ? false : _options$reverse3,
        _options$voids5 = options.voids,
        voids = _options$voids5 === void 0 ? false : _options$voids5;

    if (!at) {
      return;
    }
    /**
     * Algorithm notes:
     *
     * Each step `distance` is dynamic depending on the underlying text
     * and the `unit` specified.  Each step, e.g., a line or word, may
     * span multiple text nodes, so we iterate through the text both on
     * two levels in step-sync:
     *
     * `leafText` stores the text on a text leaf level, and is advanced
     * through using the counters `leafTextOffset` and `leafTextRemaining`.
     *
     * `blockText` stores the text on a block level, and is shortened
     * by `distance` every time it is advanced.
     *
     * We only maintain a window of one blockText and one leafText because
     * a block node always appears before all of its leaf nodes.
     */


    var range = Editor.range(editor, at);

    var _Range$edges3 = Range.edges(range),
        _Range$edges4 = _slicedToArray(_Range$edges3, 2),
        start = _Range$edges4[0],
        end = _Range$edges4[1];

    var first = reverse ? end : start;
    var isNewBlock = false;
    var blockText = '';
    var distance = 0; // Distance for leafText to catch up to blockText.

    var leafTextRemaining = 0;
    var leafTextOffset = 0; // Iterate through all nodes in range, grabbing entire textual content
    // of block nodes in blockText, and text nodes in leafText.
    // Exploits the fact that nodes are sequenced in such a way that we first
    // encounter the block node, then all of its text nodes, so when iterating
    // through the blockText and leafText we just need to remember a window of
    // one block node and leaf node, respectively.

    var _iterator7 = _createForOfIteratorHelper$1(Editor.nodes(editor, {
      at: at,
      reverse: reverse,
      voids: voids
    })),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _step7$value = _slicedToArray(_step7.value, 2),
            node = _step7$value[0],
            path = _step7$value[1];

        /*
         * ELEMENT NODE - Yield position(s) for voids, collect blockText for blocks
         */
        if (Element.isElement(node)) {
          // Void nodes are a special case, so by default we will always
          // yield their first point. If the `voids` option is set to true,
          // then we will iterate over their content.
          if (!voids && editor.isVoid(node)) {
            yield Editor.start(editor, path);
            continue;
          } // Inline element nodes are ignored as they don't themselves
          // contribute to `blockText` or `leafText` - their parent and
          // children do.


          if (editor.isInline(node)) continue; // Block element node - set `blockText` to its text content.

          if (Editor.hasInlines(editor, node)) {
            // We always exhaust block nodes before encountering a new one:
            //   console.assert(blockText === '',
            //     `blockText='${blockText}' - `+
            //     `not exhausted before new block node`, path)
            // Ensure range considered is capped to `range`, in the
            // start/end edge cases where block extends beyond range.
            // Equivalent to this, but presumably more performant:
            //   blockRange = Editor.range(editor, ...Editor.edges(editor, path))
            //   blockRange = Range.intersection(range, blockRange) // intersect
            //   blockText = Editor.string(editor, blockRange, { voids })
            var e = Path.isAncestor(path, end.path) ? end : Editor.end(editor, path);
            var s = Path.isAncestor(path, start.path) ? start : Editor.start(editor, path);
            blockText = Editor.string(editor, {
              anchor: s,
              focus: e
            }, {
              voids: voids
            });
            blockText = reverse ? esrever.reverse(blockText) : blockText;
            isNewBlock = true;
          }
        }
        /*
         * TEXT LEAF NODE - Iterate through text content, yielding
         * positions every `distance` offset according to `unit`.
         */


        if (Text.isText(node)) {
          var isFirst = Path.equals(path, first.path); // Proof that we always exhaust text nodes before encountering a new one:
          //   console.assert(leafTextRemaining <= 0,
          //     `leafTextRemaining=${leafTextRemaining} - `+
          //     `not exhausted before new leaf text node`, path)
          // Reset `leafText` counters for new text node.

          if (isFirst) {
            leafTextRemaining = reverse ? first.offset : node.text.length - first.offset;
            leafTextOffset = first.offset; // Works for reverse too.
          } else {
            leafTextRemaining = node.text.length;
            leafTextOffset = reverse ? leafTextRemaining : 0;
          } // Yield position at the start of node (potentially).


          if (isFirst || isNewBlock || unit === 'offset') {
            yield {
              path: path,
              offset: leafTextOffset
            };
            isNewBlock = false;
          } // Yield positions every (dynamically calculated) `distance` offset.


          while (true) {
            // If `leafText` has caught up with `blockText` (distance=0),
            // and if blockText is exhausted, break to get another block node,
            // otherwise advance blockText forward by the new `distance`.
            if (distance === 0) {
              if (blockText === '') break;
              distance = calcDistance(blockText, unit);
              blockText = blockText.slice(distance);
            } // Advance `leafText` by the current `distance`.


            leafTextOffset = reverse ? leafTextOffset - distance : leafTextOffset + distance;
            leafTextRemaining = leafTextRemaining - distance; // If `leafText` is exhausted, break to get a new leaf node
            // and set distance to the overflow amount, so we'll (maybe)
            // catch up to blockText in the next leaf text node.

            if (leafTextRemaining < 0) {
              distance = -leafTextRemaining;
              break;
            } // Successfully walked `distance` offsets through `leafText`
            // to catch up with `blockText`, so we can reset `distance`
            // and yield this position in this node.


            distance = 0;
            yield {
              path: path,
              offset: leafTextOffset
            };
          }
        }
      } // Proof that upon completion, we've exahusted both leaf and block text:
      //   console.assert(leafTextRemaining <= 0, "leafText wasn't exhausted")
      //   console.assert(blockText === '', "blockText wasn't exhausted")
      // Helper:
      // Return the distance in offsets for a step of size `unit` on given string.

    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }

    function calcDistance(text, unit) {
      if (unit === 'character') {
        return getCharacterDistance(text);
      } else if (unit === 'word') {
        return getWordDistance(text);
      } else if (unit === 'line' || unit === 'block') {
        return text.length;
      }

      return 1;
    }
  },

  /**
   * Get the matching node in the branch of the document before a location.
   */
  previous: function previous(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$mode4 = options.mode,
        mode = _options$mode4 === void 0 ? 'lowest' : _options$mode4,
        _options$voids6 = options.voids,
        voids = _options$voids6 === void 0 ? false : _options$voids6;
    var match = options.match,
        _options$at6 = options.at,
        at = _options$at6 === void 0 ? editor.selection : _options$at6;

    if (!at) {
      return;
    }

    var pointBeforeLocation = Editor.before(editor, at, {
      voids: voids
    });

    if (!pointBeforeLocation) {
      return;
    }

    var _Editor$first = Editor.first(editor, []),
        _Editor$first2 = _slicedToArray(_Editor$first, 2),
        to = _Editor$first2[1]; // The search location is from the start of the document to the path of
    // the point before the location passed in


    var span = [pointBeforeLocation.path, to];

    if (Path.isPath(at) && at.length === 0) {
      throw new Error("Cannot get the previous node from the root node!");
    }

    if (match == null) {
      if (Path.isPath(at)) {
        var _Editor$parent3 = Editor.parent(editor, at),
            _Editor$parent4 = _slicedToArray(_Editor$parent3, 1),
            parent = _Editor$parent4[0];

        match = function match(n) {
          return parent.children.includes(n);
        };
      } else {
        match = function match() {
          return true;
        };
      }
    }

    var _Editor$nodes5 = Editor.nodes(editor, {
      reverse: true,
      at: span,
      match: match,
      mode: mode,
      voids: voids
    }),
        _Editor$nodes6 = _slicedToArray(_Editor$nodes5, 1),
        previous = _Editor$nodes6[0];

    return previous;
  },

  /**
   * Get a range of a location.
   */
  range: function range(editor, at, to) {
    if (Range.isRange(at) && !to) {
      return at;
    }

    var start = Editor.start(editor, at);
    var end = Editor.end(editor, to || at);
    return {
      anchor: start,
      focus: end
    };
  },

  /**
   * Create a mutable ref for a `Range` object, which will stay in sync as new
   * operations are applied to the editor.
   */
  rangeRef: function rangeRef(editor, range) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _options$affinity3 = options.affinity,
        affinity = _options$affinity3 === void 0 ? 'forward' : _options$affinity3;
    var ref = {
      current: range,
      affinity: affinity,
      unref: function unref() {
        var current = ref.current;
        var rangeRefs = Editor.rangeRefs(editor);
        rangeRefs["delete"](ref);
        ref.current = null;
        return current;
      }
    };
    var refs = Editor.rangeRefs(editor);
    refs.add(ref);
    return ref;
  },

  /**
   * Get the set of currently tracked range refs of the editor.
   */
  rangeRefs: function rangeRefs(editor) {
    var refs = RANGE_REFS.get(editor);

    if (!refs) {
      refs = new Set();
      RANGE_REFS.set(editor, refs);
    }

    return refs;
  },

  /**
   * Remove a custom property from all of the leaf text nodes in the current
   * selection.
   *
   * If the selection is currently collapsed, the removal will be stored on
   * `editor.marks` and applied to the text inserted next.
   */
  removeMark: function removeMark(editor, key) {
    editor.removeMark(key);
  },

  /**
   * Manually set if the editor should currently be normalizing.
   *
   * Note: Using this incorrectly can leave the editor in an invalid state.
   *
   */
  setNormalizing: function setNormalizing(editor, isNormalizing) {
    NORMALIZING.set(editor, isNormalizing);
  },

  /**
   * Get the start point of a location.
   */
  start: function start(editor, at) {
    return Editor.point(editor, at, {
      edge: 'start'
    });
  },

  /**
   * Get the text string content of a location.
   *
   * Note: by default the text of void nodes is considered to be an empty
   * string, regardless of content, unless you pass in true for the voids option
   */
  string: function string(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _options$voids7 = options.voids,
        voids = _options$voids7 === void 0 ? false : _options$voids7;
    var range = Editor.range(editor, at);

    var _Range$edges5 = Range.edges(range),
        _Range$edges6 = _slicedToArray(_Range$edges5, 2),
        start = _Range$edges6[0],
        end = _Range$edges6[1];

    var text = '';

    var _iterator8 = _createForOfIteratorHelper$1(Editor.nodes(editor, {
      at: range,
      match: Text.isText,
      voids: voids
    })),
        _step8;

    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var _step8$value = _slicedToArray(_step8.value, 2),
            node = _step8$value[0],
            path = _step8$value[1];

        var t = node.text;

        if (Path.equals(path, end.path)) {
          t = t.slice(0, end.offset);
        }

        if (Path.equals(path, start.path)) {
          t = t.slice(start.offset);
        }

        text += t;
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }

    return text;
  },

  /**
   * Convert a range into a non-hanging one.
   */
  unhangRange: function unhangRange(editor, range) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _options$voids8 = options.voids,
        voids = _options$voids8 === void 0 ? false : _options$voids8;

    var _Range$edges7 = Range.edges(range),
        _Range$edges8 = _slicedToArray(_Range$edges7, 2),
        start = _Range$edges8[0],
        end = _Range$edges8[1]; // PERF: exit early if we can guarantee that the range isn't hanging.


    if (start.offset !== 0 || end.offset !== 0 || Range.isCollapsed(range)) {
      return range;
    }

    var endBlock = Editor.above(editor, {
      at: end,
      match: function match(n) {
        return Editor.isBlock(editor, n);
      }
    });
    var blockPath = endBlock ? endBlock[1] : [];
    var first = Editor.start(editor, []);
    var before = {
      anchor: first,
      focus: end
    };
    var skip = true;

    var _iterator9 = _createForOfIteratorHelper$1(Editor.nodes(editor, {
      at: before,
      match: Text.isText,
      reverse: true,
      voids: voids
    })),
        _step9;

    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var _step9$value = _slicedToArray(_step9.value, 2),
            node = _step9$value[0],
            path = _step9$value[1];

        if (skip) {
          skip = false;
          continue;
        }

        if (node.text !== '' || Path.isBefore(path, blockPath)) {
          end = {
            path: path,
            offset: node.text.length
          };
          break;
        }
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }

    return {
      anchor: start,
      focus: end
    };
  },

  /**
   * Match a void node in the current branch of the editor.
   */
  "void": function _void(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return Editor.above(editor, _objectSpread$1(_objectSpread$1({}, options), {}, {
      match: function match(n) {
        return Editor.isVoid(editor, n);
      }
    }));
  },

  /**
   * Call a function, deferring normalization until after it completes.
   */
  withoutNormalizing: function withoutNormalizing(editor, fn) {
    var value = Editor.isNormalizing(editor);
    Editor.setNormalizing(editor, false);

    try {
      fn();
    } finally {
      Editor.setNormalizing(editor, value);
    }

    Editor.normalize(editor);
  }
};

var Location = {
  /**
   * Check if a value implements the `Location` interface.
   */
  isLocation: function isLocation(value) {
    return Path.isPath(value) || Point.isPoint(value) || Range.isRange(value);
  }
};
var Span = {
  /**
   * Check if a value implements the `Span` interface.
   */
  isSpan: function isSpan(value) {
    return Array.isArray(value) && value.length === 2 && value.every(Path.isPath);
  }
};

function _createForOfIteratorHelper$2(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var IS_NODE_LIST_CACHE = new WeakMap();
var Node = {
  /**
   * Get the node at a specific path, asserting that it's an ancestor node.
   */
  ancestor: function ancestor(root, path) {
    var node = Node.get(root, path);

    if (Text.isText(node)) {
      throw new Error("Cannot get the ancestor node at path [".concat(path, "] because it refers to a text node instead: ").concat(node));
    }

    return node;
  },

  /**
   * Return a generator of all the ancestor nodes above a specific path.
   *
   * By default the order is bottom-up, from lowest to highest ancestor in
   * the tree, but you can pass the `reverse: true` option to go top-down.
   */
  ancestors: function* ancestors(root, path) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var _iterator = _createForOfIteratorHelper$2(Path.ancestors(path, options)),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var p = _step.value;
        var n = Node.ancestor(root, p);
        var entry = [n, p];
        yield entry;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  },

  /**
   * Get the child of a node at a specific index.
   */
  child: function child(root, index) {
    if (Text.isText(root)) {
      throw new Error("Cannot get the child of a text node: ".concat(JSON.stringify(root)));
    }

    var c = root.children[index];

    if (c == null) {
      throw new Error("Cannot get child at index `".concat(index, "` in node: ").concat(JSON.stringify(root)));
    }

    return c;
  },

  /**
   * Iterate over the children of a node at a specific path.
   */
  children: function* children(root, path) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _options$reverse = options.reverse,
        reverse = _options$reverse === void 0 ? false : _options$reverse;
    var ancestor = Node.ancestor(root, path);
    var children = ancestor.children;
    var index = reverse ? children.length - 1 : 0;

    while (reverse ? index >= 0 : index < children.length) {
      var child = Node.child(ancestor, index);
      var childPath = path.concat(index);
      yield [child, childPath];
      index = reverse ? index - 1 : index + 1;
    }
  },

  /**
   * Get an entry for the common ancesetor node of two paths.
   */
  common: function common(root, path, another) {
    var p = Path.common(path, another);
    var n = Node.get(root, p);
    return [n, p];
  },

  /**
   * Get the node at a specific path, asserting that it's a descendant node.
   */
  descendant: function descendant(root, path) {
    var node = Node.get(root, path);

    if (Editor.isEditor(node)) {
      throw new Error("Cannot get the descendant node at path [".concat(path, "] because it refers to the root editor node instead: ").concat(node));
    }

    return node;
  },

  /**
   * Return a generator of all the descendant node entries inside a root node.
   */
  descendants: function* descendants(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _iterator2 = _createForOfIteratorHelper$2(Node.nodes(root, options)),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _slicedToArray(_step2.value, 2),
            node = _step2$value[0],
            path = _step2$value[1];

        if (path.length !== 0) {
          // NOTE: we have to coerce here because checking the path's length does
          // guarantee that `node` is not a `Editor`, but TypeScript doesn't know.
          yield [node, path];
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  },

  /**
   * Return a generator of all the element nodes inside a root node. Each iteration
   * will return an `ElementEntry` tuple consisting of `[Element, Path]`. If the
   * root node is an element it will be included in the iteration as well.
   */
  elements: function* elements(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _iterator3 = _createForOfIteratorHelper$2(Node.nodes(root, options)),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _step3$value = _slicedToArray(_step3.value, 2),
            node = _step3$value[0],
            path = _step3$value[1];

        if (Element.isElement(node)) {
          yield [node, path];
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  },

  /**
   * Extract props from a Node.
   */
  extractProps: function extractProps(node) {
    if (Element.isAncestor(node)) {
      var children = node.children,
          properties = _objectWithoutProperties(node, ["children"]);

      return properties;
    } else {
      var text = node.text,
          _properties = _objectWithoutProperties(node, ["text"]);

      return _properties;
    }
  },

  /**
   * Get the first node entry in a root node from a path.
   */
  first: function first(root, path) {
    var p = path.slice();
    var n = Node.get(root, p);

    while (n) {
      if (Text.isText(n) || n.children.length === 0) {
        break;
      } else {
        n = n.children[0];
        p.push(0);
      }
    }

    return [n, p];
  },

  /**
   * Get the sliced fragment represented by a range inside a root node.
   */
  fragment: function fragment(root, range) {
    if (Text.isText(root)) {
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(JSON.stringify(root)));
    }

    var newRoot = immer.produce({
      children: root.children
    }, function (r) {
      var _Range$edges = Range.edges(range),
          _Range$edges2 = _slicedToArray(_Range$edges, 2),
          start = _Range$edges2[0],
          end = _Range$edges2[1];

      var nodeEntries = Node.nodes(r, {
        reverse: true,
        pass: function pass(_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              path = _ref2[1];

          return !Range.includes(range, path);
        }
      });

      var _iterator4 = _createForOfIteratorHelper$2(nodeEntries),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _step4$value = _slicedToArray(_step4.value, 2),
              path = _step4$value[1];

          if (!Range.includes(range, path)) {
            var parent = Node.parent(r, path);
            var index = path[path.length - 1];
            parent.children.splice(index, 1);
          }

          if (Path.equals(path, end.path)) {
            var leaf = Node.leaf(r, path);
            leaf.text = leaf.text.slice(0, end.offset);
          }

          if (Path.equals(path, start.path)) {
            var _leaf = Node.leaf(r, path);

            _leaf.text = _leaf.text.slice(start.offset);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      if (Editor.isEditor(r)) {
        r.selection = null;
      }
    });
    return newRoot.children;
  },

  /**
   * Get the descendant node referred to by a specific path. If the path is an
   * empty array, it refers to the root node itself.
   */
  get: function get(root, path) {
    var node = root;

    for (var i = 0; i < path.length; i++) {
      var p = path[i];

      if (Text.isText(node) || !node.children[p]) {
        throw new Error("Cannot find a descendant at path [".concat(path, "] in node: ").concat(JSON.stringify(root)));
      }

      node = node.children[p];
    }

    return node;
  },

  /**
   * Check if a descendant node exists at a specific path.
   */
  has: function has(root, path) {
    var node = root;

    for (var i = 0; i < path.length; i++) {
      var p = path[i];

      if (Text.isText(node) || !node.children[p]) {
        return false;
      }

      node = node.children[p];
    }

    return true;
  },

  /**
   * Check if a value implements the `Node` interface.
   */
  isNode: function isNode(value) {
    return Text.isText(value) || Element.isElement(value) || Editor.isEditor(value);
  },

  /**
   * Check if a value is a list of `Node` objects.
   */
  isNodeList: function isNodeList(value) {
    if (!Array.isArray(value)) {
      return false;
    }

    var cachedResult = IS_NODE_LIST_CACHE.get(value);

    if (cachedResult !== undefined) {
      return cachedResult;
    }

    var isNodeList = value.every(function (val) {
      return Node.isNode(val);
    });
    IS_NODE_LIST_CACHE.set(value, isNodeList);
    return isNodeList;
  },

  /**
   * Get the last node entry in a root node from a path.
   */
  last: function last(root, path) {
    var p = path.slice();
    var n = Node.get(root, p);

    while (n) {
      if (Text.isText(n) || n.children.length === 0) {
        break;
      } else {
        var i = n.children.length - 1;
        n = n.children[i];
        p.push(i);
      }
    }

    return [n, p];
  },

  /**
   * Get the node at a specific path, ensuring it's a leaf text node.
   */
  leaf: function leaf(root, path) {
    var node = Node.get(root, path);

    if (!Text.isText(node)) {
      throw new Error("Cannot get the leaf node at path [".concat(path, "] because it refers to a non-leaf node: ").concat(node));
    }

    return node;
  },

  /**
   * Return a generator of the in a branch of the tree, from a specific path.
   *
   * By default the order is top-down, from lowest to highest node in the tree,
   * but you can pass the `reverse: true` option to go bottom-up.
   */
  levels: function* levels(root, path) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var _iterator5 = _createForOfIteratorHelper$2(Path.levels(path, options)),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var p = _step5.value;
        var n = Node.get(root, p);
        yield [n, p];
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  },

  /**
   * Check if a node matches a set of props.
   */
  matches: function matches(node, props) {
    return Element.isElement(node) && Element.isElementProps(props) && Element.matches(node, props) || Text.isText(node) && Text.isTextProps(props) && Text.matches(node, props);
  },

  /**
   * Return a generator of all the node entries of a root node. Each entry is
   * returned as a `[Node, Path]` tuple, with the path referring to the node's
   * position inside the root node.
   */
  nodes: function* nodes(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var pass = options.pass,
        _options$reverse2 = options.reverse,
        reverse = _options$reverse2 === void 0 ? false : _options$reverse2;
    var _options$from = options.from,
        from = _options$from === void 0 ? [] : _options$from,
        to = options.to;
    var visited = new Set();
    var p = [];
    var n = root;

    while (true) {
      if (to && (reverse ? Path.isBefore(p, to) : Path.isAfter(p, to))) {
        break;
      }

      if (!visited.has(n)) {
        yield [n, p];
      } // If we're allowed to go downward and we haven't descended yet, do.


      if (!visited.has(n) && !Text.isText(n) && n.children.length !== 0 && (pass == null || pass([n, p]) === false)) {
        visited.add(n);
        var nextIndex = reverse ? n.children.length - 1 : 0;

        if (Path.isAncestor(p, from)) {
          nextIndex = from[p.length];
        }

        p = p.concat(nextIndex);
        n = Node.get(root, p);
        continue;
      } // If we're at the root and we can't go down, we're done.


      if (p.length === 0) {
        break;
      } // If we're going forward...


      if (!reverse) {
        var newPath = Path.next(p);

        if (Node.has(root, newPath)) {
          p = newPath;
          n = Node.get(root, p);
          continue;
        }
      } // If we're going backward...


      if (reverse && p[p.length - 1] !== 0) {
        var _newPath = Path.previous(p);

        p = _newPath;
        n = Node.get(root, p);
        continue;
      } // Otherwise we're going upward...


      p = Path.parent(p);
      n = Node.get(root, p);
      visited.add(n);
    }
  },

  /**
   * Get the parent of a node at a specific path.
   */
  parent: function parent(root, path) {
    var parentPath = Path.parent(path);
    var p = Node.get(root, parentPath);

    if (Text.isText(p)) {
      throw new Error("Cannot get the parent of path [".concat(path, "] because it does not exist in the root."));
    }

    return p;
  },

  /**
   * Get the concatenated text string of a node's content.
   *
   * Note that this will not include spaces or line breaks between block nodes.
   * It is not a user-facing string, but a string for performing offset-related
   * computations for a node.
   */
  string: function string(node) {
    if (Text.isText(node)) {
      return node.text;
    } else {
      return node.children.map(Node.string).join('');
    }
  },

  /**
   * Return a generator of all leaf text nodes in a root node.
   */
  texts: function* texts(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _iterator6 = _createForOfIteratorHelper$2(Node.nodes(root, options)),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _step6$value = _slicedToArray(_step6.value, 2),
            node = _step6$value[0],
            path = _step6$value[1];

        if (Text.isText(node)) {
          yield [node, path];
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }
};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Operation = {
  /**
   * Check of a value is a `NodeOperation` object.
   */
  isNodeOperation: function isNodeOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith('_node');
  },

  /**
   * Check of a value is an `Operation` object.
   */
  isOperation: function isOperation(value) {
    if (!isPlainObject__default['default'](value)) {
      return false;
    }

    switch (value.type) {
      case 'insert_node':
        return Path.isPath(value.path) && Node.isNode(value.node);

      case 'insert_text':
        return typeof value.offset === 'number' && typeof value.text === 'string' && Path.isPath(value.path);

      case 'merge_node':
        return typeof value.position === 'number' && Path.isPath(value.path) && isPlainObject__default['default'](value.properties);

      case 'move_node':
        return Path.isPath(value.path) && Path.isPath(value.newPath);

      case 'remove_node':
        return Path.isPath(value.path) && Node.isNode(value.node);

      case 'remove_text':
        return typeof value.offset === 'number' && typeof value.text === 'string' && Path.isPath(value.path);

      case 'set_node':
        return Path.isPath(value.path) && isPlainObject__default['default'](value.properties) && isPlainObject__default['default'](value.newProperties);

      case 'set_selection':
        return value.properties === null && Range.isRange(value.newProperties) || value.newProperties === null && Range.isRange(value.properties) || isPlainObject__default['default'](value.properties) && isPlainObject__default['default'](value.newProperties);

      case 'split_node':
        return Path.isPath(value.path) && typeof value.position === 'number' && isPlainObject__default['default'](value.properties);

      default:
        return false;
    }
  },

  /**
   * Check if a value is a list of `Operation` objects.
   */
  isOperationList: function isOperationList(value) {
    return Array.isArray(value) && value.every(function (val) {
      return Operation.isOperation(val);
    });
  },

  /**
   * Check of a value is a `SelectionOperation` object.
   */
  isSelectionOperation: function isSelectionOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith('_selection');
  },

  /**
   * Check of a value is a `TextOperation` object.
   */
  isTextOperation: function isTextOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith('_text');
  },

  /**
   * Invert an operation, returning a new operation that will exactly undo the
   * original when applied.
   */
  inverse: function inverse(op) {
    switch (op.type) {
      case 'insert_node':
        {
          return _objectSpread$2(_objectSpread$2({}, op), {}, {
            type: 'remove_node'
          });
        }

      case 'insert_text':
        {
          return _objectSpread$2(_objectSpread$2({}, op), {}, {
            type: 'remove_text'
          });
        }

      case 'merge_node':
        {
          return _objectSpread$2(_objectSpread$2({}, op), {}, {
            type: 'split_node',
            path: Path.previous(op.path)
          });
        }

      case 'move_node':
        {
          var newPath = op.newPath,
              path = op.path; // PERF: in this case the move operation is a no-op anyways.

          if (Path.equals(newPath, path)) {
            return op;
          } // If the move happens completely within a single parent the path and
          // newPath are stable with respect to each other.


          if (Path.isSibling(path, newPath)) {
            return _objectSpread$2(_objectSpread$2({}, op), {}, {
              path: newPath,
              newPath: path
            });
          } // If the move does not happen within a single parent it is possible
          // for the move to impact the true path to the location where the node
          // was removed from and where it was inserted. We have to adjust for this
          // and find the original path. We can accomplish this (only in non-sibling)
          // moves by looking at the impact of the move operation on the node
          // after the original move path.


          var inversePath = Path.transform(path, op);
          var inverseNewPath = Path.transform(Path.next(path), op);
          return _objectSpread$2(_objectSpread$2({}, op), {}, {
            path: inversePath,
            newPath: inverseNewPath
          });
        }

      case 'remove_node':
        {
          return _objectSpread$2(_objectSpread$2({}, op), {}, {
            type: 'insert_node'
          });
        }

      case 'remove_text':
        {
          return _objectSpread$2(_objectSpread$2({}, op), {}, {
            type: 'insert_text'
          });
        }

      case 'set_node':
        {
          var properties = op.properties,
              newProperties = op.newProperties;
          return _objectSpread$2(_objectSpread$2({}, op), {}, {
            properties: newProperties,
            newProperties: properties
          });
        }

      case 'set_selection':
        {
          var _properties = op.properties,
              _newProperties = op.newProperties;

          if (_properties == null) {
            return _objectSpread$2(_objectSpread$2({}, op), {}, {
              properties: _newProperties,
              newProperties: null
            });
          } else if (_newProperties == null) {
            return _objectSpread$2(_objectSpread$2({}, op), {}, {
              properties: null,
              newProperties: _properties
            });
          } else {
            return _objectSpread$2(_objectSpread$2({}, op), {}, {
              properties: _newProperties,
              newProperties: _properties
            });
          }
        }

      case 'split_node':
        {
          return _objectSpread$2(_objectSpread$2({}, op), {}, {
            type: 'merge_node',
            path: Path.next(op.path)
          });
        }
    }
  }
};

var Path = {
  /**
   * Get a list of ancestor paths for a given path.
   *
   * The paths are sorted from deepest to shallowest ancestor. However, if the
   * `reverse: true` option is passed, they are reversed.
   */
  ancestors: function ancestors(path) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$reverse = options.reverse,
        reverse = _options$reverse === void 0 ? false : _options$reverse;
    var paths = Path.levels(path, options);

    if (reverse) {
      paths = paths.slice(1);
    } else {
      paths = paths.slice(0, -1);
    }

    return paths;
  },

  /**
   * Get the common ancestor path of two paths.
   */
  common: function common(path, another) {
    var common = [];

    for (var i = 0; i < path.length && i < another.length; i++) {
      var av = path[i];
      var bv = another[i];

      if (av !== bv) {
        break;
      }

      common.push(av);
    }

    return common;
  },

  /**
   * Compare a path to another, returning an integer indicating whether the path
   * was before, at, or after the other.
   *
   * Note: Two paths of unequal length can still receive a `0` result if one is
   * directly above or below the other. If you want exact matching, use
   * [[Path.equals]] instead.
   */
  compare: function compare(path, another) {
    var min = Math.min(path.length, another.length);

    for (var i = 0; i < min; i++) {
      if (path[i] < another[i]) return -1;
      if (path[i] > another[i]) return 1;
    }

    return 0;
  },

  /**
   * Check if a path ends after one of the indexes in another.
   */
  endsAfter: function endsAfter(path, another) {
    var i = path.length - 1;
    var as = path.slice(0, i);
    var bs = another.slice(0, i);
    var av = path[i];
    var bv = another[i];
    return Path.equals(as, bs) && av > bv;
  },

  /**
   * Check if a path ends at one of the indexes in another.
   */
  endsAt: function endsAt(path, another) {
    var i = path.length;
    var as = path.slice(0, i);
    var bs = another.slice(0, i);
    return Path.equals(as, bs);
  },

  /**
   * Check if a path ends before one of the indexes in another.
   */
  endsBefore: function endsBefore(path, another) {
    var i = path.length - 1;
    var as = path.slice(0, i);
    var bs = another.slice(0, i);
    var av = path[i];
    var bv = another[i];
    return Path.equals(as, bs) && av < bv;
  },

  /**
   * Check if a path is exactly equal to another.
   */
  equals: function equals(path, another) {
    return path.length === another.length && path.every(function (n, i) {
      return n === another[i];
    });
  },

  /**
   * Check if the path of previous sibling node exists
   */
  hasPrevious: function hasPrevious(path) {
    return path[path.length - 1] > 0;
  },

  /**
   * Check if a path is after another.
   */
  isAfter: function isAfter(path, another) {
    return Path.compare(path, another) === 1;
  },

  /**
   * Check if a path is an ancestor of another.
   */
  isAncestor: function isAncestor(path, another) {
    return path.length < another.length && Path.compare(path, another) === 0;
  },

  /**
   * Check if a path is before another.
   */
  isBefore: function isBefore(path, another) {
    return Path.compare(path, another) === -1;
  },

  /**
   * Check if a path is a child of another.
   */
  isChild: function isChild(path, another) {
    return path.length === another.length + 1 && Path.compare(path, another) === 0;
  },

  /**
   * Check if a path is equal to or an ancestor of another.
   */
  isCommon: function isCommon(path, another) {
    return path.length <= another.length && Path.compare(path, another) === 0;
  },

  /**
   * Check if a path is a descendant of another.
   */
  isDescendant: function isDescendant(path, another) {
    return path.length > another.length && Path.compare(path, another) === 0;
  },

  /**
   * Check if a path is the parent of another.
   */
  isParent: function isParent(path, another) {
    return path.length + 1 === another.length && Path.compare(path, another) === 0;
  },

  /**
   * Check is a value implements the `Path` interface.
   */
  isPath: function isPath(value) {
    return Array.isArray(value) && (value.length === 0 || typeof value[0] === 'number');
  },

  /**
   * Check if a path is a sibling of another.
   */
  isSibling: function isSibling(path, another) {
    if (path.length !== another.length) {
      return false;
    }

    var as = path.slice(0, -1);
    var bs = another.slice(0, -1);
    var al = path[path.length - 1];
    var bl = another[another.length - 1];
    return al !== bl && Path.equals(as, bs);
  },

  /**
   * Get a list of paths at every level down to a path. Note: this is the same
   * as `Path.ancestors`, but including the path itself.
   *
   * The paths are sorted from shallowest to deepest. However, if the `reverse:
   * true` option is passed, they are reversed.
   */
  levels: function levels(path) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$reverse2 = options.reverse,
        reverse = _options$reverse2 === void 0 ? false : _options$reverse2;
    var list = [];

    for (var i = 0; i <= path.length; i++) {
      list.push(path.slice(0, i));
    }

    if (reverse) {
      list.reverse();
    }

    return list;
  },

  /**
   * Given a path, get the path to the next sibling node.
   */
  next: function next(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the next path of a root path [".concat(path, "], because it has no next index."));
    }

    var last = path[path.length - 1];
    return path.slice(0, -1).concat(last + 1);
  },

  /**
   * Given a path, return a new path referring to the parent node above it.
   */
  parent: function parent(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the parent path of the root path [".concat(path, "]."));
    }

    return path.slice(0, -1);
  },

  /**
   * Given a path, get the path to the previous sibling node.
   */
  previous: function previous(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the previous path of a root path [".concat(path, "], because it has no previous index."));
    }

    var last = path[path.length - 1];

    if (last <= 0) {
      throw new Error("Cannot get the previous path of a first child path [".concat(path, "] because it would result in a negative index."));
    }

    return path.slice(0, -1).concat(last - 1);
  },

  /**
   * Get a path relative to an ancestor.
   */
  relative: function relative(path, ancestor) {
    if (!Path.isAncestor(ancestor, path) && !Path.equals(path, ancestor)) {
      throw new Error("Cannot get the relative path of [".concat(path, "] inside ancestor [").concat(ancestor, "], because it is not above or equal to the path."));
    }

    return path.slice(ancestor.length);
  },

  /**
   * Transform a path by an operation.
   */
  transform: function transform(path, operation) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return immer.produce(path, function (p) {
      var _options$affinity = options.affinity,
          affinity = _options$affinity === void 0 ? 'forward' : _options$affinity; // PERF: Exit early if the operation is guaranteed not to have an effect.

      if (path.length === 0) {
        return;
      }

      switch (operation.type) {
        case 'insert_node':
          {
            var op = operation.path;

            if (Path.equals(op, p) || Path.endsBefore(op, p) || Path.isAncestor(op, p)) {
              p[op.length - 1] += 1;
            }

            break;
          }

        case 'remove_node':
          {
            var _op = operation.path;

            if (Path.equals(_op, p) || Path.isAncestor(_op, p)) {
              return null;
            } else if (Path.endsBefore(_op, p)) {
              p[_op.length - 1] -= 1;
            }

            break;
          }

        case 'merge_node':
          {
            var _op2 = operation.path,
                position = operation.position;

            if (Path.equals(_op2, p) || Path.endsBefore(_op2, p)) {
              p[_op2.length - 1] -= 1;
            } else if (Path.isAncestor(_op2, p)) {
              p[_op2.length - 1] -= 1;
              p[_op2.length] += position;
            }

            break;
          }

        case 'split_node':
          {
            var _op3 = operation.path,
                _position = operation.position;

            if (Path.equals(_op3, p)) {
              if (affinity === 'forward') {
                p[p.length - 1] += 1;
              } else if (affinity === 'backward') ; else {
                return null;
              }
            } else if (Path.endsBefore(_op3, p)) {
              p[_op3.length - 1] += 1;
            } else if (Path.isAncestor(_op3, p) && path[_op3.length] >= _position) {
              p[_op3.length - 1] += 1;
              p[_op3.length] -= _position;
            }

            break;
          }

        case 'move_node':
          {
            var _op4 = operation.path,
                onp = operation.newPath; // If the old and new path are the same, it's a no-op.

            if (Path.equals(_op4, onp)) {
              return;
            }

            if (Path.isAncestor(_op4, p) || Path.equals(_op4, p)) {
              var copy = onp.slice();

              if (Path.endsBefore(_op4, onp) && _op4.length < onp.length) {
                copy[_op4.length - 1] -= 1;
              }

              return copy.concat(p.slice(_op4.length));
            } else if (Path.isSibling(_op4, onp) && (Path.isAncestor(onp, p) || Path.equals(onp, p))) {
              if (Path.endsBefore(_op4, p)) {
                p[_op4.length - 1] -= 1;
              } else {
                p[_op4.length - 1] += 1;
              }
            } else if (Path.endsBefore(onp, p) || Path.equals(onp, p) || Path.isAncestor(onp, p)) {
              if (Path.endsBefore(_op4, p)) {
                p[_op4.length - 1] -= 1;
              }

              p[onp.length - 1] += 1;
            } else if (Path.endsBefore(_op4, p)) {
              if (Path.equals(onp, p)) {
                p[onp.length - 1] += 1;
              }

              p[_op4.length - 1] -= 1;
            }

            break;
          }
      }
    });
  }
};

var PathRef = {
  /**
   * Transform the path ref's current value by an operation.
   */
  transform: function transform(ref, op) {
    var current = ref.current,
        affinity = ref.affinity;

    if (current == null) {
      return;
    }

    var path = Path.transform(current, op, {
      affinity: affinity
    });
    ref.current = path;

    if (path == null) {
      ref.unref();
    }
  }
};

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Point = {
  /**
   * Compare a point to another, returning an integer indicating whether the
   * point was before, at, or after the other.
   */
  compare: function compare(point, another) {
    var result = Path.compare(point.path, another.path);

    if (result === 0) {
      if (point.offset < another.offset) return -1;
      if (point.offset > another.offset) return 1;
      return 0;
    }

    return result;
  },

  /**
   * Check if a point is after another.
   */
  isAfter: function isAfter(point, another) {
    return Point.compare(point, another) === 1;
  },

  /**
   * Check if a point is before another.
   */
  isBefore: function isBefore(point, another) {
    return Point.compare(point, another) === -1;
  },

  /**
   * Check if a point is exactly equal to another.
   */
  equals: function equals(point, another) {
    // PERF: ensure the offsets are equal first since they are cheaper to check.
    return point.offset === another.offset && Path.equals(point.path, another.path);
  },

  /**
   * Check if a value implements the `Point` interface.
   */
  isPoint: function isPoint(value) {
    return isPlainObject__default['default'](value) && typeof value.offset === 'number' && Path.isPath(value.path);
  },

  /**
   * Transform a point by an operation.
   */
  transform: function transform(point, op) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return immer.produce(point, function (p) {
      var _options$affinity = options.affinity,
          affinity = _options$affinity === void 0 ? 'forward' : _options$affinity;
      var path = p.path,
          offset = p.offset;

      switch (op.type) {
        case 'insert_node':
        case 'move_node':
          {
            p.path = Path.transform(path, op, options);
            break;
          }

        case 'insert_text':
          {
            if (Path.equals(op.path, path) && op.offset <= offset) {
              p.offset += op.text.length;
            }

            break;
          }

        case 'merge_node':
          {
            if (Path.equals(op.path, path)) {
              p.offset += op.position;
            }

            p.path = Path.transform(path, op, options);
            break;
          }

        case 'remove_text':
          {
            if (Path.equals(op.path, path) && op.offset <= offset) {
              p.offset -= Math.min(offset - op.offset, op.text.length);
            }

            break;
          }

        case 'remove_node':
          {
            if (Path.equals(op.path, path) || Path.isAncestor(op.path, path)) {
              return null;
            }

            p.path = Path.transform(path, op, options);
            break;
          }

        case 'split_node':
          {
            if (Path.equals(op.path, path)) {
              if (op.position === offset && affinity == null) {
                return null;
              } else if (op.position < offset || op.position === offset && affinity === 'forward') {
                p.offset -= op.position;
                p.path = Path.transform(path, op, _objectSpread$3(_objectSpread$3({}, options), {}, {
                  affinity: 'forward'
                }));
              }
            } else {
              p.path = Path.transform(path, op, options);
            }

            break;
          }
      }
    });
  }
};

var PointRef = {
  /**
   * Transform the point ref's current value by an operation.
   */
  transform: function transform(ref, op) {
    var current = ref.current,
        affinity = ref.affinity;

    if (current == null) {
      return;
    }

    var point = Point.transform(current, op, {
      affinity: affinity
    });
    ref.current = point;

    if (point == null) {
      ref.unref();
    }
  }
};

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Range = {
  /**
   * Get the start and end points of a range, in the order in which they appear
   * in the document.
   */
  edges: function edges(range) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$reverse = options.reverse,
        reverse = _options$reverse === void 0 ? false : _options$reverse;
    var anchor = range.anchor,
        focus = range.focus;
    return Range.isBackward(range) === reverse ? [anchor, focus] : [focus, anchor];
  },

  /**
   * Get the end point of a range.
   */
  end: function end(range) {
    var _Range$edges = Range.edges(range),
        _Range$edges2 = _slicedToArray(_Range$edges, 2),
        end = _Range$edges2[1];

    return end;
  },

  /**
   * Check if a range is exactly equal to another.
   */
  equals: function equals(range, another) {
    return Point.equals(range.anchor, another.anchor) && Point.equals(range.focus, another.focus);
  },

  /**
   * Check if a range includes a path, a point or part of another range.
   */
  includes: function includes(range, target) {
    if (Range.isRange(target)) {
      if (Range.includes(range, target.anchor) || Range.includes(range, target.focus)) {
        return true;
      }

      var _Range$edges3 = Range.edges(range),
          _Range$edges4 = _slicedToArray(_Range$edges3, 2),
          rs = _Range$edges4[0],
          re = _Range$edges4[1];

      var _Range$edges5 = Range.edges(target),
          _Range$edges6 = _slicedToArray(_Range$edges5, 2),
          ts = _Range$edges6[0],
          te = _Range$edges6[1];

      return Point.isBefore(rs, ts) && Point.isAfter(re, te);
    }

    var _Range$edges7 = Range.edges(range),
        _Range$edges8 = _slicedToArray(_Range$edges7, 2),
        start = _Range$edges8[0],
        end = _Range$edges8[1];

    var isAfterStart = false;
    var isBeforeEnd = false;

    if (Point.isPoint(target)) {
      isAfterStart = Point.compare(target, start) >= 0;
      isBeforeEnd = Point.compare(target, end) <= 0;
    } else {
      isAfterStart = Path.compare(target, start.path) >= 0;
      isBeforeEnd = Path.compare(target, end.path) <= 0;
    }

    return isAfterStart && isBeforeEnd;
  },

  /**
   * Get the intersection of a range with another.
   */
  intersection: function intersection(range, another) {
    var anchor = range.anchor,
        focus = range.focus,
        rest = _objectWithoutProperties(range, ["anchor", "focus"]);

    var _Range$edges9 = Range.edges(range),
        _Range$edges10 = _slicedToArray(_Range$edges9, 2),
        s1 = _Range$edges10[0],
        e1 = _Range$edges10[1];

    var _Range$edges11 = Range.edges(another),
        _Range$edges12 = _slicedToArray(_Range$edges11, 2),
        s2 = _Range$edges12[0],
        e2 = _Range$edges12[1];

    var start = Point.isBefore(s1, s2) ? s2 : s1;
    var end = Point.isBefore(e1, e2) ? e1 : e2;

    if (Point.isBefore(end, start)) {
      return null;
    } else {
      return _objectSpread$4({
        anchor: start,
        focus: end
      }, rest);
    }
  },

  /**
   * Check if a range is backward, meaning that its anchor point appears in the
   * document _after_ its focus point.
   */
  isBackward: function isBackward(range) {
    var anchor = range.anchor,
        focus = range.focus;
    return Point.isAfter(anchor, focus);
  },

  /**
   * Check if a range is collapsed, meaning that both its anchor and focus
   * points refer to the exact same position in the document.
   */
  isCollapsed: function isCollapsed(range) {
    var anchor = range.anchor,
        focus = range.focus;
    return Point.equals(anchor, focus);
  },

  /**
   * Check if a range is expanded.
   *
   * This is the opposite of [[Range.isCollapsed]] and is provided for legibility.
   */
  isExpanded: function isExpanded(range) {
    return !Range.isCollapsed(range);
  },

  /**
   * Check if a range is forward.
   *
   * This is the opposite of [[Range.isBackward]] and is provided for legibility.
   */
  isForward: function isForward(range) {
    return !Range.isBackward(range);
  },

  /**
   * Check if a value implements the [[Range]] interface.
   */
  isRange: function isRange(value) {
    return isPlainObject__default['default'](value) && Point.isPoint(value.anchor) && Point.isPoint(value.focus);
  },

  /**
   * Iterate through all of the point entries in a range.
   */
  points: function* points(range) {
    yield [range.anchor, 'anchor'];
    yield [range.focus, 'focus'];
  },

  /**
   * Get the start point of a range.
   */
  start: function start(range) {
    var _Range$edges13 = Range.edges(range),
        _Range$edges14 = _slicedToArray(_Range$edges13, 1),
        start = _Range$edges14[0];

    return start;
  },

  /**
   * Transform a range by an operation.
   */
  transform: function transform(range, op) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _options$affinity = options.affinity,
        affinity = _options$affinity === void 0 ? 'inward' : _options$affinity;
    var affinityAnchor;
    var affinityFocus;

    if (affinity === 'inward') {
      if (Range.isForward(range)) {
        affinityAnchor = 'forward';
        affinityFocus = 'backward';
      } else {
        affinityAnchor = 'backward';
        affinityFocus = 'forward';
      }
    } else if (affinity === 'outward') {
      if (Range.isForward(range)) {
        affinityAnchor = 'backward';
        affinityFocus = 'forward';
      } else {
        affinityAnchor = 'forward';
        affinityFocus = 'backward';
      }
    } else {
      affinityAnchor = affinity;
      affinityFocus = affinity;
    }

    return immer.produce(range, function (r) {
      var anchor = Point.transform(r.anchor, op, {
        affinity: affinityAnchor
      });
      var focus = Point.transform(r.focus, op, {
        affinity: affinityFocus
      });

      if (!anchor || !focus) {
        return null;
      }

      r.anchor = anchor;
      r.focus = focus;
    });
  }
};

var RangeRef = {
  /**
   * Transform the range ref's current value by an operation.
   */
  transform: function transform(ref, op) {
    var current = ref.current,
        affinity = ref.affinity;

    if (current == null) {
      return;
    }

    var path = Range.transform(current, op, {
      affinity: affinity
    });
    ref.current = path;

    if (path == null) {
      ref.unref();
    }
  }
};

function _createForOfIteratorHelper$3(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$3(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }

function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Text = {
  /**
   * Check if two text nodes are equal.
   */
  equals: function equals(text, another) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _options$loose = options.loose,
        loose = _options$loose === void 0 ? false : _options$loose;

    function omitText(obj) {
      var text = obj.text,
          rest = _objectWithoutProperties(obj, ["text"]);

      return rest;
    }

    return isEqual__default['default'](loose ? omitText(text) : text, loose ? omitText(another) : another);
  },

  /**
   * Check if a value implements the `Text` interface.
   */
  isText: function isText(value) {
    return isPlainObject__default['default'](value) && typeof value.text === 'string';
  },

  /**
   * Check if a value is a list of `Text` objects.
   */
  isTextList: function isTextList(value) {
    return Array.isArray(value) && value.every(function (val) {
      return Text.isText(val);
    });
  },

  /**
   * Check if some props are a partial of Text.
   */
  isTextProps: function isTextProps(props) {
    return props.text !== undefined;
  },

  /**
   * Check if an text matches set of properties.
   *
   * Note: this is for matching custom properties, and it does not ensure that
   * the `text` property are two nodes equal.
   */
  matches: function matches(text, props) {
    for (var key in props) {
      if (key === 'text') {
        continue;
      }

      if (!text.hasOwnProperty(key) || text[key] !== props[key]) {
        return false;
      }
    }

    return true;
  },

  /**
   * Get the leaves for a text node given decorations.
   */
  decorations: function decorations(node, _decorations) {
    var leaves = [_objectSpread$5({}, node)];

    var _iterator = _createForOfIteratorHelper$3(_decorations),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var dec = _step.value;

        var anchor = dec.anchor,
            focus = dec.focus,
            rest = _objectWithoutProperties(dec, ["anchor", "focus"]);

        var _Range$edges = Range.edges(dec),
            _Range$edges2 = _slicedToArray(_Range$edges, 2),
            start = _Range$edges2[0],
            end = _Range$edges2[1];

        var next = [];
        var o = 0;

        var _iterator2 = _createForOfIteratorHelper$3(leaves),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var leaf = _step2.value;
            var length = leaf.text.length;
            var offset = o;
            o += length; // If the range encompases the entire leaf, add the range.

            if (start.offset <= offset && end.offset >= o) {
              Object.assign(leaf, rest);
              next.push(leaf);
              continue;
            } // If the range expanded and match the leaf, or starts after, or ends before it, continue.


            if (start.offset !== end.offset && (start.offset === o || end.offset === offset) || start.offset > o || end.offset < offset || end.offset === offset && offset !== 0) {
              next.push(leaf);
              continue;
            } // Otherwise we need to split the leaf, at the start, end, or both,
            // and add the range to the middle intersecting section. Do the end
            // split first since we don't need to update the offset that way.


            var middle = leaf;
            var before = void 0;
            var after = void 0;

            if (end.offset < o) {
              var off = end.offset - offset;
              after = _objectSpread$5(_objectSpread$5({}, middle), {}, {
                text: middle.text.slice(off)
              });
              middle = _objectSpread$5(_objectSpread$5({}, middle), {}, {
                text: middle.text.slice(0, off)
              });
            }

            if (start.offset > offset) {
              var _off = start.offset - offset;

              before = _objectSpread$5(_objectSpread$5({}, middle), {}, {
                text: middle.text.slice(0, _off)
              });
              middle = _objectSpread$5(_objectSpread$5({}, middle), {}, {
                text: middle.text.slice(_off)
              });
            }

            Object.assign(middle, rest);

            if (before) {
              next.push(before);
            }

            next.push(middle);

            if (after) {
              next.push(after);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        leaves = next;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return leaves;
  }
};

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper$4(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$4(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$4(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$4(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen); }

function _arrayLikeToArray$4(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var applyToDraft = function applyToDraft(editor, selection, op) {
  switch (op.type) {
    case 'insert_node':
      {
        var path = op.path,
            node = op.node;
        var parent = Node.parent(editor, path);
        var index = path[path.length - 1];

        if (index > parent.children.length) {
          throw new Error("Cannot apply an \"insert_node\" operation at path [".concat(path, "] because the destination is past the end of the node."));
        }

        parent.children.splice(index, 0, node);

        if (selection) {
          var _iterator = _createForOfIteratorHelper$4(Range.points(selection)),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = _slicedToArray(_step.value, 2),
                  point = _step$value[0],
                  key = _step$value[1];

              selection[key] = Point.transform(point, op);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        break;
      }

    case 'insert_text':
      {
        var _path = op.path,
            offset = op.offset,
            text = op.text;
        if (text.length === 0) break;

        var _node = Node.leaf(editor, _path);

        var before = _node.text.slice(0, offset);

        var after = _node.text.slice(offset);

        _node.text = before + text + after;

        if (selection) {
          var _iterator2 = _createForOfIteratorHelper$4(Range.points(selection)),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _step2$value = _slicedToArray(_step2.value, 2),
                  _point = _step2$value[0],
                  _key = _step2$value[1];

              selection[_key] = Point.transform(_point, op);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }

        break;
      }

    case 'merge_node':
      {
        var _path2 = op.path;

        var _node2 = Node.get(editor, _path2);

        var prevPath = Path.previous(_path2);
        var prev = Node.get(editor, prevPath);

        var _parent = Node.parent(editor, _path2);

        var _index = _path2[_path2.length - 1];

        if (Text.isText(_node2) && Text.isText(prev)) {
          prev.text += _node2.text;
        } else if (!Text.isText(_node2) && !Text.isText(prev)) {
          var _prev$children;

          (_prev$children = prev.children).push.apply(_prev$children, _toConsumableArray(_node2.children));
        } else {
          throw new Error("Cannot apply a \"merge_node\" operation at path [".concat(_path2, "] to nodes of different interfaces: ").concat(_node2, " ").concat(prev));
        }

        _parent.children.splice(_index, 1);

        if (selection) {
          var _iterator3 = _createForOfIteratorHelper$4(Range.points(selection)),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _step3$value = _slicedToArray(_step3.value, 2),
                  _point2 = _step3$value[0],
                  _key2 = _step3$value[1];

              selection[_key2] = Point.transform(_point2, op);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }

        break;
      }

    case 'move_node':
      {
        var _path3 = op.path,
            newPath = op.newPath;

        if (Path.isAncestor(_path3, newPath)) {
          throw new Error("Cannot move a path [".concat(_path3, "] to new path [").concat(newPath, "] because the destination is inside itself."));
        }

        var _node3 = Node.get(editor, _path3);

        var _parent2 = Node.parent(editor, _path3);

        var _index2 = _path3[_path3.length - 1]; // This is tricky, but since the `path` and `newPath` both refer to
        // the same snapshot in time, there's a mismatch. After either
        // removing the original position, the second step's path can be out
        // of date. So instead of using the `op.newPath` directly, we
        // transform `op.path` to ascertain what the `newPath` would be after
        // the operation was applied.

        _parent2.children.splice(_index2, 1);

        var truePath = Path.transform(_path3, op);
        var newParent = Node.get(editor, Path.parent(truePath));
        var newIndex = truePath[truePath.length - 1];
        newParent.children.splice(newIndex, 0, _node3);

        if (selection) {
          var _iterator4 = _createForOfIteratorHelper$4(Range.points(selection)),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _step4$value = _slicedToArray(_step4.value, 2),
                  _point3 = _step4$value[0],
                  _key3 = _step4$value[1];

              selection[_key3] = Point.transform(_point3, op);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }

        break;
      }

    case 'remove_node':
      {
        var _path4 = op.path;
        var _index3 = _path4[_path4.length - 1];

        var _parent3 = Node.parent(editor, _path4);

        _parent3.children.splice(_index3, 1); // Transform all of the points in the value, but if the point was in the
        // node that was removed we need to update the range or remove it.


        if (selection) {
          var _iterator5 = _createForOfIteratorHelper$4(Range.points(selection)),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var _step5$value = _slicedToArray(_step5.value, 2),
                  _point4 = _step5$value[0],
                  _key4 = _step5$value[1];

              var result = Point.transform(_point4, op);

              if (selection != null && result != null) {
                selection[_key4] = result;
              } else {
                var _prev = void 0;

                var next = void 0;

                var _iterator6 = _createForOfIteratorHelper$4(Node.texts(editor)),
                    _step6;

                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var _step6$value = _slicedToArray(_step6.value, 2),
                        n = _step6$value[0],
                        p = _step6$value[1];

                    if (Path.compare(p, _path4) === -1) {
                      _prev = [n, p];
                    } else {
                      next = [n, p];
                      break;
                    }
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }

                if (_prev) {
                  _point4.path = _prev[1];
                  _point4.offset = _prev[0].text.length;
                } else if (next) {
                  _point4.path = next[1];
                  _point4.offset = 0;
                } else {
                  selection = null;
                }
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }

        break;
      }

    case 'remove_text':
      {
        var _path5 = op.path,
            _offset = op.offset,
            _text = op.text;
        if (_text.length === 0) break;

        var _node4 = Node.leaf(editor, _path5);

        var _before = _node4.text.slice(0, _offset);

        var _after = _node4.text.slice(_offset + _text.length);

        _node4.text = _before + _after;

        if (selection) {
          var _iterator7 = _createForOfIteratorHelper$4(Range.points(selection)),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _step7$value = _slicedToArray(_step7.value, 2),
                  _point5 = _step7$value[0],
                  _key5 = _step7$value[1];

              selection[_key5] = Point.transform(_point5, op);
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }

        break;
      }

    case 'set_node':
      {
        var _path6 = op.path,
            properties = op.properties,
            newProperties = op.newProperties;

        if (_path6.length === 0) {
          throw new Error("Cannot set properties on the root node!");
        }

        var _node5 = Node.get(editor, _path6);

        for (var _key6 in newProperties) {
          if (_key6 === 'children' || _key6 === 'text') {
            throw new Error("Cannot set the \"".concat(_key6, "\" property of nodes!"));
          }

          var value = newProperties[_key6];

          if (value == null) {
            delete _node5[_key6];
          } else {
            _node5[_key6] = value;
          }
        } // properties that were previously defined, but are now missing, must be deleted


        for (var _key7 in properties) {
          if (!newProperties.hasOwnProperty(_key7)) {
            delete _node5[_key7];
          }
        }

        break;
      }

    case 'set_selection':
      {
        var _newProperties = op.newProperties;

        if (_newProperties == null) {
          selection = _newProperties;
        } else {
          if (selection == null) {
            if (!Range.isRange(_newProperties)) {
              throw new Error("Cannot apply an incomplete \"set_selection\" operation properties ".concat(JSON.stringify(_newProperties), " when there is no current selection."));
            }

            selection = _objectSpread$6({}, _newProperties);
          }

          for (var _key8 in _newProperties) {
            var _value = _newProperties[_key8];

            if (_value == null) {
              if (_key8 === 'anchor' || _key8 === 'focus') {
                throw new Error("Cannot remove the \"".concat(_key8, "\" selection property"));
              }

              delete selection[_key8];
            } else {
              selection[_key8] = _value;
            }
          }
        }

        break;
      }

    case 'split_node':
      {
        var _path7 = op.path,
            position = op.position,
            _properties = op.properties;

        if (_path7.length === 0) {
          throw new Error("Cannot apply a \"split_node\" operation at path [".concat(_path7, "] because the root node cannot be split."));
        }

        var _node6 = Node.get(editor, _path7);

        var _parent4 = Node.parent(editor, _path7);

        var _index4 = _path7[_path7.length - 1];
        var newNode;

        if (Text.isText(_node6)) {
          var _before2 = _node6.text.slice(0, position);

          var _after2 = _node6.text.slice(position);

          _node6.text = _before2;
          newNode = _objectSpread$6(_objectSpread$6({}, _properties), {}, {
            text: _after2
          });
        } else {
          var _before3 = _node6.children.slice(0, position);

          var _after3 = _node6.children.slice(position);

          _node6.children = _before3;
          newNode = _objectSpread$6(_objectSpread$6({}, _properties), {}, {
            children: _after3
          });
        }

        _parent4.children.splice(_index4 + 1, 0, newNode);

        if (selection) {
          var _iterator8 = _createForOfIteratorHelper$4(Range.points(selection)),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var _step8$value = _slicedToArray(_step8.value, 2),
                  _point6 = _step8$value[0],
                  _key9 = _step8$value[1];

              selection[_key9] = Point.transform(_point6, op);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }

        break;
      }
  }

  return selection;
};

var GeneralTransforms = {
  /**
   * Transform the editor by an operation.
   */
  transform: function transform(editor, op) {
    editor.children = immer.createDraft(editor.children);
    var selection = editor.selection && immer.createDraft(editor.selection);

    try {
      selection = applyToDraft(editor, selection, op);
    } finally {
      editor.children = immer.finishDraft(editor.children);

      if (selection) {
        editor.selection = immer.isDraft(selection) ? immer.finishDraft(selection) : selection;
      } else {
        editor.selection = null;
      }
    }
  }
};

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper$5(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$5(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$5(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$5(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$5(o, minLen); }

function _arrayLikeToArray$5(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var NodeTransforms = {
  /**
   * Insert nodes at a specific location in the Editor.
   */
  insertNodes: function insertNodes(editor, nodes) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, function () {
      var _options$hanging = options.hanging,
          hanging = _options$hanging === void 0 ? false : _options$hanging,
          _options$voids = options.voids,
          voids = _options$voids === void 0 ? false : _options$voids,
          _options$mode = options.mode,
          mode = _options$mode === void 0 ? 'lowest' : _options$mode;
      var at = options.at,
          match = options.match,
          select = options.select;

      if (Node.isNode(nodes)) {
        nodes = [nodes];
      }

      if (nodes.length === 0) {
        return;
      }

      var _nodes = nodes,
          _nodes2 = _slicedToArray(_nodes, 1),
          node = _nodes2[0]; // By default, use the selection as the target location. But if there is
      // no selection, insert at the end of the document since that is such a
      // common use case when inserting from a non-selected state.


      if (!at) {
        if (editor.selection) {
          at = editor.selection;
        } else if (editor.children.length > 0) {
          at = Editor.end(editor, []);
        } else {
          at = [0];
        }

        select = true;
      }

      if (select == null) {
        select = false;
      }

      if (Range.isRange(at)) {
        if (!hanging) {
          at = Editor.unhangRange(editor, at);
        }

        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var _Range$edges = Range.edges(at),
              _Range$edges2 = _slicedToArray(_Range$edges, 2),
              end = _Range$edges2[1];

          var pointRef = Editor.pointRef(editor, end);
          Transforms["delete"](editor, {
            at: at
          });
          at = pointRef.unref();
        }
      }

      if (Point.isPoint(at)) {
        if (match == null) {
          if (Text.isText(node)) {
            match = function match(n) {
              return Text.isText(n);
            };
          } else if (editor.isInline(node)) {
            match = function match(n) {
              return Text.isText(n) || Editor.isInline(editor, n);
            };
          } else {
            match = function match(n) {
              return Editor.isBlock(editor, n);
            };
          }
        }

        var _Editor$nodes = Editor.nodes(editor, {
          at: at.path,
          match: match,
          mode: mode,
          voids: voids
        }),
            _Editor$nodes2 = _slicedToArray(_Editor$nodes, 1),
            entry = _Editor$nodes2[0];

        if (entry) {
          var _entry = _slicedToArray(entry, 2),
              _matchPath = _entry[1];

          var pathRef = Editor.pathRef(editor, _matchPath);
          var isAtEnd = Editor.isEnd(editor, at, _matchPath);
          Transforms.splitNodes(editor, {
            at: at,
            match: match,
            mode: mode,
            voids: voids
          });
          var path = pathRef.unref();
          at = isAtEnd ? Path.next(path) : path;
        } else {
          return;
        }
      }

      var parentPath = Path.parent(at);
      var index = at[at.length - 1];

      if (!voids && Editor["void"](editor, {
        at: parentPath
      })) {
        return;
      }

      var _iterator = _createForOfIteratorHelper$5(nodes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _node = _step.value;

          var _path = parentPath.concat(index);

          index++;
          editor.apply({
            type: 'insert_node',
            path: _path,
            node: _node
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (select) {
        var point = Editor.end(editor, at);

        if (point) {
          Transforms.select(editor, point);
        }
      }
    });
  },

  /**
   * Lift nodes at a specific location upwards in the document tree, splitting
   * their parent in two if necessary.
   */
  liftNodes: function liftNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, function () {
      var _options$at = options.at,
          at = _options$at === void 0 ? editor.selection : _options$at,
          _options$mode2 = options.mode,
          mode = _options$mode2 === void 0 ? 'lowest' : _options$mode2,
          _options$voids2 = options.voids,
          voids = _options$voids2 === void 0 ? false : _options$voids2;
      var match = options.match;

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : function (n) {
          return Editor.isBlock(editor, n);
        };
      }

      if (!at) {
        return;
      }

      var matches = Editor.nodes(editor, {
        at: at,
        match: match,
        mode: mode,
        voids: voids
      });
      var pathRefs = Array.from(matches, function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            p = _ref2[1];

        return Editor.pathRef(editor, p);
      });

      for (var _i = 0, _pathRefs = pathRefs; _i < _pathRefs.length; _i++) {
        var pathRef = _pathRefs[_i];
        var path = pathRef.unref();

        if (path.length < 2) {
          throw new Error("Cannot lift node at a path [".concat(path, "] because it has a depth of less than `2`."));
        }

        var parentNodeEntry = Editor.node(editor, Path.parent(path));

        var _parentNodeEntry = _slicedToArray(parentNodeEntry, 2),
            parent = _parentNodeEntry[0],
            parentPath = _parentNodeEntry[1];

        var index = path[path.length - 1];
        var length = parent.children.length;

        if (length === 1) {
          var toPath = Path.next(parentPath);
          Transforms.moveNodes(editor, {
            at: path,
            to: toPath,
            voids: voids
          });
          Transforms.removeNodes(editor, {
            at: parentPath,
            voids: voids
          });
        } else if (index === 0) {
          Transforms.moveNodes(editor, {
            at: path,
            to: parentPath,
            voids: voids
          });
        } else if (index === length - 1) {
          var _toPath = Path.next(parentPath);

          Transforms.moveNodes(editor, {
            at: path,
            to: _toPath,
            voids: voids
          });
        } else {
          var splitPath = Path.next(path);

          var _toPath2 = Path.next(parentPath);

          Transforms.splitNodes(editor, {
            at: splitPath,
            voids: voids
          });
          Transforms.moveNodes(editor, {
            at: path,
            to: _toPath2,
            voids: voids
          });
        }
      }
    });
  },

  /**
   * Merge a node at a location with the previous node of the same depth,
   * removing any empty containing nodes after the merge if necessary.
   */
  mergeNodes: function mergeNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, function () {
      var match = options.match,
          _options$at2 = options.at,
          at = _options$at2 === void 0 ? editor.selection : _options$at2;
      var _options$hanging2 = options.hanging,
          hanging = _options$hanging2 === void 0 ? false : _options$hanging2,
          _options$voids3 = options.voids,
          voids = _options$voids3 === void 0 ? false : _options$voids3,
          _options$mode3 = options.mode,
          mode = _options$mode3 === void 0 ? 'lowest' : _options$mode3;

      if (!at) {
        return;
      }

      if (match == null) {
        if (Path.isPath(at)) {
          var _Editor$parent = Editor.parent(editor, at),
              _Editor$parent2 = _slicedToArray(_Editor$parent, 1),
              parent = _Editor$parent2[0];

          match = function match(n) {
            return parent.children.includes(n);
          };
        } else {
          match = function match(n) {
            return Editor.isBlock(editor, n);
          };
        }
      }

      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at);
      }

      if (Range.isRange(at)) {
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var _Range$edges3 = Range.edges(at),
              _Range$edges4 = _slicedToArray(_Range$edges3, 2),
              end = _Range$edges4[1];

          var pointRef = Editor.pointRef(editor, end);
          Transforms["delete"](editor, {
            at: at
          });
          at = pointRef.unref();

          if (options.at == null) {
            Transforms.select(editor, at);
          }
        }
      }

      var _Editor$nodes3 = Editor.nodes(editor, {
        at: at,
        match: match,
        voids: voids,
        mode: mode
      }),
          _Editor$nodes4 = _slicedToArray(_Editor$nodes3, 1),
          current = _Editor$nodes4[0];

      var prev = Editor.previous(editor, {
        at: at,
        match: match,
        voids: voids,
        mode: mode
      });

      if (!current || !prev) {
        return;
      }

      var _current = _slicedToArray(current, 2),
          node = _current[0],
          path = _current[1];

      var _prev = _slicedToArray(prev, 2),
          prevNode = _prev[0],
          prevPath = _prev[1];

      if (path.length === 0 || prevPath.length === 0) {
        return;
      }

      var newPath = Path.next(prevPath);
      var commonPath = Path.common(path, prevPath);
      var isPreviousSibling = Path.isSibling(path, prevPath);
      var levels = Array.from(Editor.levels(editor, {
        at: path
      }), function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
            n = _ref4[0];

        return n;
      }).slice(commonPath.length).slice(0, -1); // Determine if the merge will leave an ancestor of the path empty as a
      // result, in which case we'll want to remove it after merging.

      var emptyAncestor = Editor.above(editor, {
        at: path,
        mode: 'highest',
        match: function match(n) {
          return levels.includes(n) && hasSingleChildNest(editor, n);
        }
      });
      var emptyRef = emptyAncestor && Editor.pathRef(editor, emptyAncestor[1]);
      var properties;
      var position; // Ensure that the nodes are equivalent, and figure out what the position
      // and extra properties of the merge will be.

      if (Text.isText(node) && Text.isText(prevNode)) {
        var text = node.text,
            rest = _objectWithoutProperties(node, ["text"]);

        position = prevNode.text.length;
        properties = rest;
      } else if (Element.isElement(node) && Element.isElement(prevNode)) {
        var children = node.children,
            _rest = _objectWithoutProperties(node, ["children"]);

        position = prevNode.children.length;
        properties = _rest;
      } else {
        throw new Error("Cannot merge the node at path [".concat(path, "] with the previous sibling because it is not the same kind: ").concat(JSON.stringify(node), " ").concat(JSON.stringify(prevNode)));
      } // If the node isn't already the next sibling of the previous node, move
      // it so that it is before merging.


      if (!isPreviousSibling) {
        Transforms.moveNodes(editor, {
          at: path,
          to: newPath,
          voids: voids
        });
      } // If there was going to be an empty ancestor of the node that was merged,
      // we remove it from the tree.


      if (emptyRef) {
        Transforms.removeNodes(editor, {
          at: emptyRef.current,
          voids: voids
        });
      } // If the target node that we're merging with is empty, remove it instead
      // of merging the two. This is a common rich text editor behavior to
      // prevent losing formatting when deleting entire nodes when you have a
      // hanging selection.


      if (Element.isElement(prevNode) && Editor.isEmpty(editor, prevNode) || Text.isText(prevNode) && prevNode.text === '') {
        Transforms.removeNodes(editor, {
          at: prevPath,
          voids: voids
        });
      } else {
        editor.apply({
          type: 'merge_node',
          path: newPath,
          position: position,
          properties: properties
        });
      }

      if (emptyRef) {
        emptyRef.unref();
      }
    });
  },

  /**
   * Move the nodes at a location to a new location.
   */
  moveNodes: function moveNodes(editor, options) {
    Editor.withoutNormalizing(editor, function () {
      var to = options.to,
          _options$at3 = options.at,
          at = _options$at3 === void 0 ? editor.selection : _options$at3,
          _options$mode4 = options.mode,
          mode = _options$mode4 === void 0 ? 'lowest' : _options$mode4,
          _options$voids4 = options.voids,
          voids = _options$voids4 === void 0 ? false : _options$voids4;
      var match = options.match;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : function (n) {
          return Editor.isBlock(editor, n);
        };
      }

      var toRef = Editor.pathRef(editor, to);
      var targets = Editor.nodes(editor, {
        at: at,
        match: match,
        mode: mode,
        voids: voids
      });
      var pathRefs = Array.from(targets, function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            p = _ref6[1];

        return Editor.pathRef(editor, p);
      });

      for (var _i2 = 0, _pathRefs2 = pathRefs; _i2 < _pathRefs2.length; _i2++) {
        var pathRef = _pathRefs2[_i2];
        var path = pathRef.unref();
        var newPath = toRef.current;

        if (path.length !== 0) {
          editor.apply({
            type: 'move_node',
            path: path,
            newPath: newPath
          });
        }

        if (toRef.current && Path.isSibling(newPath, path) && Path.isAfter(newPath, path)) {
          // When performing a sibling move to a later index, the path at the destination is shifted
          // to before the insertion point instead of after. To ensure our group of nodes are inserted
          // in the correct order we increment toRef to account for that
          toRef.current = Path.next(toRef.current);
        }
      }

      toRef.unref();
    });
  },

  /**
   * Remove the nodes at a specific location in the document.
   */
  removeNodes: function removeNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, function () {
      var _options$hanging3 = options.hanging,
          hanging = _options$hanging3 === void 0 ? false : _options$hanging3,
          _options$voids5 = options.voids,
          voids = _options$voids5 === void 0 ? false : _options$voids5,
          _options$mode5 = options.mode,
          mode = _options$mode5 === void 0 ? 'lowest' : _options$mode5;
      var _options$at4 = options.at,
          at = _options$at4 === void 0 ? editor.selection : _options$at4,
          match = options.match;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : function (n) {
          return Editor.isBlock(editor, n);
        };
      }

      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at);
      }

      var depths = Editor.nodes(editor, {
        at: at,
        match: match,
        mode: mode,
        voids: voids
      });
      var pathRefs = Array.from(depths, function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
            p = _ref8[1];

        return Editor.pathRef(editor, p);
      });

      for (var _i3 = 0, _pathRefs3 = pathRefs; _i3 < _pathRefs3.length; _i3++) {
        var pathRef = _pathRefs3[_i3];
        var path = pathRef.unref();

        if (path) {
          var _Editor$node = Editor.node(editor, path),
              _Editor$node2 = _slicedToArray(_Editor$node, 1),
              node = _Editor$node2[0];

          editor.apply({
            type: 'remove_node',
            path: path,
            node: node
          });
        }
      }
    });
  },

  /**
   * Set new properties on the nodes at a location.
   */
  setNodes: function setNodes(editor, props) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, function () {
      var match = options.match,
          _options$at5 = options.at,
          at = _options$at5 === void 0 ? editor.selection : _options$at5;
      var _options$hanging4 = options.hanging,
          hanging = _options$hanging4 === void 0 ? false : _options$hanging4,
          _options$mode6 = options.mode,
          mode = _options$mode6 === void 0 ? 'lowest' : _options$mode6,
          _options$split = options.split,
          split = _options$split === void 0 ? false : _options$split,
          _options$voids6 = options.voids,
          voids = _options$voids6 === void 0 ? false : _options$voids6;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : function (n) {
          return Editor.isBlock(editor, n);
        };
      }

      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at);
      }

      if (split && Range.isRange(at)) {
        var rangeRef = Editor.rangeRef(editor, at, {
          affinity: 'inward'
        });

        var _Range$edges5 = Range.edges(at),
            _Range$edges6 = _slicedToArray(_Range$edges5, 2),
            start = _Range$edges6[0],
            end = _Range$edges6[1];

        var splitMode = mode === 'lowest' ? 'lowest' : 'highest';
        var endAtEndOfNode = Editor.isEnd(editor, end, end.path);
        Transforms.splitNodes(editor, {
          at: end,
          match: match,
          mode: splitMode,
          voids: voids,
          always: !endAtEndOfNode
        });
        var startAtStartOfNode = Editor.isStart(editor, start, start.path);
        Transforms.splitNodes(editor, {
          at: start,
          match: match,
          mode: splitMode,
          voids: voids,
          always: !startAtStartOfNode
        });
        at = rangeRef.unref();

        if (options.at == null) {
          Transforms.select(editor, at);
        }
      }

      var _iterator2 = _createForOfIteratorHelper$5(Editor.nodes(editor, {
        at: at,
        match: match,
        mode: mode,
        voids: voids
      })),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
              node = _step2$value[0],
              path = _step2$value[1];

          var properties = {};
          var newProperties = {}; // You can't set properties on the editor node.

          if (path.length === 0) {
            continue;
          }

          for (var k in props) {
            if (k === 'children' || k === 'text') {
              continue;
            }

            if (props[k] !== node[k]) {
              // Omit new properties from the old property list rather than set them to undefined
              if (node.hasOwnProperty(k)) properties[k] = node[k];
              newProperties[k] = props[k];
            }
          }

          if (Object.keys(newProperties).length !== 0) {
            editor.apply({
              type: 'set_node',
              path: path,
              properties: properties,
              newProperties: newProperties
            });
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    });
  },

  /**
   * Split the nodes at a specific location.
   */
  splitNodes: function splitNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, function () {
      var _options$mode7 = options.mode,
          mode = _options$mode7 === void 0 ? 'lowest' : _options$mode7,
          _options$voids7 = options.voids,
          voids = _options$voids7 === void 0 ? false : _options$voids7;
      var match = options.match,
          _options$at6 = options.at,
          at = _options$at6 === void 0 ? editor.selection : _options$at6,
          _options$height = options.height,
          height = _options$height === void 0 ? 0 : _options$height,
          _options$always = options.always,
          always = _options$always === void 0 ? false : _options$always;

      if (match == null) {
        match = function match(n) {
          return Editor.isBlock(editor, n);
        };
      }

      if (Range.isRange(at)) {
        at = deleteRange(editor, at);
      } // If the target is a path, the default height-skipping and position
      // counters need to account for us potentially splitting at a non-leaf.


      if (Path.isPath(at)) {
        var path = at;
        var point = Editor.point(editor, path);

        var _Editor$parent3 = Editor.parent(editor, path),
            _Editor$parent4 = _slicedToArray(_Editor$parent3, 1),
            parent = _Editor$parent4[0];

        match = function match(n) {
          return n === parent;
        };

        height = point.path.length - path.length + 1;
        at = point;
        always = true;
      }

      if (!at) {
        return;
      }

      var beforeRef = Editor.pointRef(editor, at, {
        affinity: 'backward'
      });

      var _Editor$nodes5 = Editor.nodes(editor, {
        at: at,
        match: match,
        mode: mode,
        voids: voids
      }),
          _Editor$nodes6 = _slicedToArray(_Editor$nodes5, 1),
          highest = _Editor$nodes6[0];

      if (!highest) {
        return;
      }

      var voidMatch = Editor["void"](editor, {
        at: at,
        mode: 'highest'
      });
      var nudge = 0;

      if (!voids && voidMatch) {
        var _voidMatch = _slicedToArray(voidMatch, 2),
            voidNode = _voidMatch[0],
            voidPath = _voidMatch[1];

        if (Element.isElement(voidNode) && editor.isInline(voidNode)) {
          var after = Editor.after(editor, voidPath);

          if (!after) {
            var text = {
              text: ''
            };
            var afterPath = Path.next(voidPath);
            Transforms.insertNodes(editor, text, {
              at: afterPath,
              voids: voids
            });
            after = Editor.point(editor, afterPath);
          }

          at = after;
          always = true;
        }

        var siblingHeight = at.path.length - voidPath.length;
        height = siblingHeight + 1;
        always = true;
      }

      var afterRef = Editor.pointRef(editor, at);
      var depth = at.path.length - height;

      var _highest = _slicedToArray(highest, 2),
          highestPath = _highest[1];

      var lowestPath = at.path.slice(0, depth);
      var position = height === 0 ? at.offset : at.path[depth] + nudge;

      var _iterator3 = _createForOfIteratorHelper$5(Editor.levels(editor, {
        at: lowestPath,
        reverse: true,
        voids: voids
      })),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _slicedToArray(_step3.value, 2),
              node = _step3$value[0],
              _path2 = _step3$value[1];

          var split = false;

          if (_path2.length < highestPath.length || _path2.length === 0 || !voids && Editor.isVoid(editor, node)) {
            break;
          }

          var _point2 = beforeRef.current;
          var isEnd = Editor.isEnd(editor, _point2, _path2);

          if (always || !beforeRef || !Editor.isEdge(editor, _point2, _path2)) {
            split = true;
            var properties = Node.extractProps(node);
            editor.apply({
              type: 'split_node',
              path: _path2,
              position: position,
              properties: properties
            });
          }

          position = _path2[_path2.length - 1] + (split || isEnd ? 1 : 0);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (options.at == null) {
        var _point = afterRef.current || Editor.end(editor, []);

        Transforms.select(editor, _point);
      }

      beforeRef.unref();
      afterRef.unref();
    });
  },

  /**
   * Unset properties on the nodes at a location.
   */
  unsetNodes: function unsetNodes(editor, props) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!Array.isArray(props)) {
      props = [props];
    }

    var obj = {};

    var _iterator4 = _createForOfIteratorHelper$5(props),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var key = _step4.value;
        obj[key] = null;
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    Transforms.setNodes(editor, obj, options);
  },

  /**
   * Unwrap the nodes at a location from a parent node, splitting the parent if
   * necessary to ensure that only the content in the range is unwrapped.
   */
  unwrapNodes: function unwrapNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, function () {
      var _options$mode8 = options.mode,
          mode = _options$mode8 === void 0 ? 'lowest' : _options$mode8,
          _options$split2 = options.split,
          split = _options$split2 === void 0 ? false : _options$split2,
          _options$voids8 = options.voids,
          voids = _options$voids8 === void 0 ? false : _options$voids8;
      var _options$at7 = options.at,
          at = _options$at7 === void 0 ? editor.selection : _options$at7,
          match = options.match;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : function (n) {
          return Editor.isBlock(editor, n);
        };
      }

      if (Path.isPath(at)) {
        at = Editor.range(editor, at);
      }

      var rangeRef = Range.isRange(at) ? Editor.rangeRef(editor, at) : null;
      var matches = Editor.nodes(editor, {
        at: at,
        match: match,
        mode: mode,
        voids: voids
      });
      var pathRefs = Array.from(matches, function (_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2),
            p = _ref10[1];

        return Editor.pathRef(editor, p);
      });

      var _loop = function _loop() {
        var pathRef = _pathRefs4[_i4];
        var path = pathRef.unref();

        var _Editor$node3 = Editor.node(editor, path),
            _Editor$node4 = _slicedToArray(_Editor$node3, 1),
            node = _Editor$node4[0];

        var range = Editor.range(editor, path);

        if (split && rangeRef) {
          range = Range.intersection(rangeRef.current, range);
        }

        Transforms.liftNodes(editor, {
          at: range,
          match: function match(n) {
            return Element.isAncestor(node) && node.children.includes(n);
          },
          voids: voids
        });
      };

      for (var _i4 = 0, _pathRefs4 = pathRefs; _i4 < _pathRefs4.length; _i4++) {
        _loop();
      }

      if (rangeRef) {
        rangeRef.unref();
      }
    });
  },

  /**
   * Wrap the nodes at a location in a new container node, splitting the edges
   * of the range first to ensure that only the content in the range is wrapped.
   */
  wrapNodes: function wrapNodes(editor, element) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, function () {
      var _options$mode9 = options.mode,
          mode = _options$mode9 === void 0 ? 'lowest' : _options$mode9,
          _options$split3 = options.split,
          split = _options$split3 === void 0 ? false : _options$split3,
          _options$voids9 = options.voids,
          voids = _options$voids9 === void 0 ? false : _options$voids9;
      var match = options.match,
          _options$at8 = options.at,
          at = _options$at8 === void 0 ? editor.selection : _options$at8;

      if (!at) {
        return;
      }

      if (match == null) {
        if (Path.isPath(at)) {
          match = matchPath(editor, at);
        } else if (editor.isInline(element)) {
          match = function match(n) {
            return Editor.isInline(editor, n) || Text.isText(n);
          };
        } else {
          match = function match(n) {
            return Editor.isBlock(editor, n);
          };
        }
      }

      if (split && Range.isRange(at)) {
        var _Range$edges7 = Range.edges(at),
            _Range$edges8 = _slicedToArray(_Range$edges7, 2),
            start = _Range$edges8[0],
            end = _Range$edges8[1];

        var rangeRef = Editor.rangeRef(editor, at, {
          affinity: 'inward'
        });
        Transforms.splitNodes(editor, {
          at: end,
          match: match,
          voids: voids
        });
        Transforms.splitNodes(editor, {
          at: start,
          match: match,
          voids: voids
        });
        at = rangeRef.unref();

        if (options.at == null) {
          Transforms.select(editor, at);
        }
      }

      var roots = Array.from(Editor.nodes(editor, {
        at: at,
        match: editor.isInline(element) ? function (n) {
          return Editor.isBlock(editor, n);
        } : function (n) {
          return Editor.isEditor(n);
        },
        mode: 'lowest',
        voids: voids
      }));

      for (var _i5 = 0, _roots = roots; _i5 < _roots.length; _i5++) {
        var _roots$_i = _slicedToArray(_roots[_i5], 2),
            rootPath = _roots$_i[1];

        var a = Range.isRange(at) ? Range.intersection(at, Editor.range(editor, rootPath)) : at;

        if (!a) {
          continue;
        }

        var matches = Array.from(Editor.nodes(editor, {
          at: a,
          match: match,
          mode: mode,
          voids: voids
        }));

        if (matches.length > 0) {
          (function () {
            var _matches = _slicedToArray(matches, 1),
                first = _matches[0];

            var last = matches[matches.length - 1];

            var _first = _slicedToArray(first, 2),
                firstPath = _first[1];

            var _last = _slicedToArray(last, 2),
                lastPath = _last[1];

            var commonPath = Path.equals(firstPath, lastPath) ? Path.parent(firstPath) : Path.common(firstPath, lastPath);
            var range = Editor.range(editor, firstPath, lastPath);
            var commonNodeEntry = Editor.node(editor, commonPath);

            var _commonNodeEntry = _slicedToArray(commonNodeEntry, 1),
                commonNode = _commonNodeEntry[0];

            var depth = commonPath.length + 1;
            var wrapperPath = Path.next(lastPath.slice(0, depth));

            var wrapper = _objectSpread$7(_objectSpread$7({}, element), {}, {
              children: []
            });

            Transforms.insertNodes(editor, wrapper, {
              at: wrapperPath,
              voids: voids
            });
            Transforms.moveNodes(editor, {
              at: range,
              match: function match(n) {
                return Element.isAncestor(commonNode) && commonNode.children.includes(n);
              },
              to: wrapperPath.concat(0),
              voids: voids
            });
          })();
        }
      }
    });
  }
};

var hasSingleChildNest = function hasSingleChildNest(editor, node) {
  if (Element.isElement(node)) {
    var element = node;

    if (Editor.isVoid(editor, node)) {
      return true;
    } else if (element.children.length === 1) {
      return hasSingleChildNest(editor, element.children[0]);
    } else {
      return false;
    }
  } else if (Editor.isEditor(node)) {
    return false;
  } else {
    return true;
  }
};
/**
 * Convert a range into a point by deleting it's content.
 */


var deleteRange = function deleteRange(editor, range) {
  if (Range.isCollapsed(range)) {
    return range.anchor;
  } else {
    var _Range$edges9 = Range.edges(range),
        _Range$edges10 = _slicedToArray(_Range$edges9, 2),
        end = _Range$edges10[1];

    var pointRef = Editor.pointRef(editor, end);
    Transforms["delete"](editor, {
      at: range
    });
    return pointRef.unref();
  }
};

var matchPath = function matchPath(editor, path) {
  var _Editor$node5 = Editor.node(editor, path),
      _Editor$node6 = _slicedToArray(_Editor$node5, 1),
      node = _Editor$node6[0];

  return function (n) {
    return n === node;
  };
};

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var SelectionTransforms = {
  /**
   * Collapse the selection.
   */
  collapse: function collapse(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$edge = options.edge,
        edge = _options$edge === void 0 ? 'anchor' : _options$edge;
    var selection = editor.selection;

    if (!selection) {
      return;
    } else if (edge === 'anchor') {
      Transforms.select(editor, selection.anchor);
    } else if (edge === 'focus') {
      Transforms.select(editor, selection.focus);
    } else if (edge === 'start') {
      var _Range$edges = Range.edges(selection),
          _Range$edges2 = _slicedToArray(_Range$edges, 1),
          start = _Range$edges2[0];

      Transforms.select(editor, start);
    } else if (edge === 'end') {
      var _Range$edges3 = Range.edges(selection),
          _Range$edges4 = _slicedToArray(_Range$edges3, 2),
          end = _Range$edges4[1];

      Transforms.select(editor, end);
    }
  },

  /**
   * Unset the selection.
   */
  deselect: function deselect(editor) {
    var selection = editor.selection;

    if (selection) {
      editor.apply({
        type: 'set_selection',
        properties: selection,
        newProperties: null
      });
    }
  },

  /**
   * Move the selection's point forward or backward.
   */
  move: function move(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var selection = editor.selection;
    var _options$distance = options.distance,
        distance = _options$distance === void 0 ? 1 : _options$distance,
        _options$unit = options.unit,
        unit = _options$unit === void 0 ? 'character' : _options$unit,
        _options$reverse = options.reverse,
        reverse = _options$reverse === void 0 ? false : _options$reverse;
    var _options$edge2 = options.edge,
        edge = _options$edge2 === void 0 ? null : _options$edge2;

    if (!selection) {
      return;
    }

    if (edge === 'start') {
      edge = Range.isBackward(selection) ? 'focus' : 'anchor';
    }

    if (edge === 'end') {
      edge = Range.isBackward(selection) ? 'anchor' : 'focus';
    }

    var anchor = selection.anchor,
        focus = selection.focus;
    var opts = {
      distance: distance,
      unit: unit
    };
    var props = {};

    if (edge == null || edge === 'anchor') {
      var point = reverse ? Editor.before(editor, anchor, opts) : Editor.after(editor, anchor, opts);

      if (point) {
        props.anchor = point;
      }
    }

    if (edge == null || edge === 'focus') {
      var _point = reverse ? Editor.before(editor, focus, opts) : Editor.after(editor, focus, opts);

      if (_point) {
        props.focus = _point;
      }
    }

    Transforms.setSelection(editor, props);
  },

  /**
   * Set the selection to a new value.
   */
  select: function select(editor, target) {
    var selection = editor.selection;
    target = Editor.range(editor, target);

    if (selection) {
      Transforms.setSelection(editor, target);
      return;
    }

    if (!Range.isRange(target)) {
      throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(JSON.stringify(target)));
    }

    editor.apply({
      type: 'set_selection',
      properties: selection,
      newProperties: target
    });
  },

  /**
   * Set new properties on one of the selection's points.
   */
  setPoint: function setPoint(editor, props) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var selection = editor.selection;
    var _options$edge3 = options.edge,
        edge = _options$edge3 === void 0 ? 'both' : _options$edge3;

    if (!selection) {
      return;
    }

    if (edge === 'start') {
      edge = Range.isBackward(selection) ? 'focus' : 'anchor';
    }

    if (edge === 'end') {
      edge = Range.isBackward(selection) ? 'anchor' : 'focus';
    }

    var anchor = selection.anchor,
        focus = selection.focus;
    var point = edge === 'anchor' ? anchor : focus;
    Transforms.setSelection(editor, _defineProperty({}, edge === 'anchor' ? 'anchor' : 'focus', _objectSpread$8(_objectSpread$8({}, point), props)));
  },

  /**
   * Set new properties on the selection.
   */
  setSelection: function setSelection(editor, props) {
    var selection = editor.selection;
    var oldProps = {};
    var newProps = {};

    if (!selection) {
      return;
    }

    for (var k in props) {
      if (k === 'anchor' && props.anchor != null && !Point.equals(props.anchor, selection.anchor) || k === 'focus' && props.focus != null && !Point.equals(props.focus, selection.focus) || k !== 'anchor' && k !== 'focus' && props[k] !== selection[k]) {
        oldProps[k] = selection[k];
        newProps[k] = props[k];
      }
    }

    if (Object.keys(oldProps).length > 0) {
      editor.apply({
        type: 'set_selection',
        properties: oldProps,
        newProperties: newProps
      });
    }
  }
};

function _createForOfIteratorHelper$6(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$6(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$6(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$6(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$6(o, minLen); }

function _arrayLikeToArray$6(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var TextTransforms = {
  /**
   * Delete content in the editor.
   */
  "delete": function _delete(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, function () {
      var _options$reverse = options.reverse,
          reverse = _options$reverse === void 0 ? false : _options$reverse,
          _options$unit = options.unit,
          unit = _options$unit === void 0 ? 'character' : _options$unit,
          _options$distance = options.distance,
          distance = _options$distance === void 0 ? 1 : _options$distance,
          _options$voids = options.voids,
          voids = _options$voids === void 0 ? false : _options$voids;
      var _options$at = options.at,
          at = _options$at === void 0 ? editor.selection : _options$at,
          _options$hanging = options.hanging,
          hanging = _options$hanging === void 0 ? false : _options$hanging;

      if (!at) {
        return;
      }

      if (Range.isRange(at) && Range.isCollapsed(at)) {
        at = at.anchor;
      }

      if (Point.isPoint(at)) {
        var furthestVoid = Editor["void"](editor, {
          at: at,
          mode: 'highest'
        });

        if (!voids && furthestVoid) {
          var _furthestVoid = _slicedToArray(furthestVoid, 2),
              voidPath = _furthestVoid[1];

          at = voidPath;
        } else {
          var opts = {
            unit: unit,
            distance: distance
          };
          var target = reverse ? Editor.before(editor, at, opts) || Editor.start(editor, []) : Editor.after(editor, at, opts) || Editor.end(editor, []);
          at = {
            anchor: at,
            focus: target
          };
          hanging = true;
        }
      }

      if (Path.isPath(at)) {
        Transforms.removeNodes(editor, {
          at: at,
          voids: voids
        });
        return;
      }

      if (Range.isCollapsed(at)) {
        return;
      }

      if (!hanging) {
        var _Range$edges = Range.edges(at),
            _Range$edges2 = _slicedToArray(_Range$edges, 2),
            _end = _Range$edges2[1];

        var endOfDoc = Editor.end(editor, []);

        if (!Point.equals(_end, endOfDoc)) {
          at = Editor.unhangRange(editor, at, {
            voids: voids
          });
        }
      }

      var _Range$edges3 = Range.edges(at),
          _Range$edges4 = _slicedToArray(_Range$edges3, 2),
          start = _Range$edges4[0],
          end = _Range$edges4[1];

      var startBlock = Editor.above(editor, {
        match: function match(n) {
          return Editor.isBlock(editor, n);
        },
        at: start,
        voids: voids
      });
      var endBlock = Editor.above(editor, {
        match: function match(n) {
          return Editor.isBlock(editor, n);
        },
        at: end,
        voids: voids
      });
      var isAcrossBlocks = startBlock && endBlock && !Path.equals(startBlock[1], endBlock[1]);
      var isSingleText = Path.equals(start.path, end.path);
      var startVoid = voids ? null : Editor["void"](editor, {
        at: start,
        mode: 'highest'
      });
      var endVoid = voids ? null : Editor["void"](editor, {
        at: end,
        mode: 'highest'
      }); // If the start or end points are inside an inline void, nudge them out.

      if (startVoid) {
        var before = Editor.before(editor, start);

        if (before && startBlock && Path.isAncestor(startBlock[1], before.path)) {
          start = before;
        }
      }

      if (endVoid) {
        var after = Editor.after(editor, end);

        if (after && endBlock && Path.isAncestor(endBlock[1], after.path)) {
          end = after;
        }
      } // Get the highest nodes that are completely inside the range, as well as
      // the start and end nodes.


      var matches = [];
      var lastPath;

      var _iterator = _createForOfIteratorHelper$6(Editor.nodes(editor, {
        at: at,
        voids: voids
      })),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entry = _step.value;

          var _entry = _slicedToArray(entry, 2),
              _node2 = _entry[0],
              _path3 = _entry[1];

          if (lastPath && Path.compare(_path3, lastPath) === 0) {
            continue;
          }

          if (!voids && Editor.isVoid(editor, _node2) || !Path.isCommon(_path3, start.path) && !Path.isCommon(_path3, end.path)) {
            matches.push(entry);
            lastPath = _path3;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var pathRefs = Array.from(matches, function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            p = _ref2[1];

        return Editor.pathRef(editor, p);
      });
      var startRef = Editor.pointRef(editor, start);
      var endRef = Editor.pointRef(editor, end);

      if (!isSingleText && !startVoid) {
        var _point = startRef.current;

        var _Editor$leaf = Editor.leaf(editor, _point),
            _Editor$leaf2 = _slicedToArray(_Editor$leaf, 1),
            node = _Editor$leaf2[0];

        var path = _point.path;
        var _start = start,
            offset = _start.offset;
        var text = node.text.slice(offset);
        if (text.length > 0) editor.apply({
          type: 'remove_text',
          path: path,
          offset: offset,
          text: text
        });
      }

      for (var _i = 0, _pathRefs = pathRefs; _i < _pathRefs.length; _i++) {
        var pathRef = _pathRefs[_i];

        var _path = pathRef.unref();

        Transforms.removeNodes(editor, {
          at: _path,
          voids: voids
        });
      }

      if (!endVoid) {
        var _point2 = endRef.current;

        var _Editor$leaf3 = Editor.leaf(editor, _point2),
            _Editor$leaf4 = _slicedToArray(_Editor$leaf3, 1),
            _node = _Editor$leaf4[0];

        var _path2 = _point2.path;

        var _offset = isSingleText ? start.offset : 0;

        var _text = _node.text.slice(_offset, end.offset);

        if (_text.length > 0) editor.apply({
          type: 'remove_text',
          path: _path2,
          offset: _offset,
          text: _text
        });
      }

      if (!isSingleText && isAcrossBlocks && endRef.current && startRef.current) {
        Transforms.mergeNodes(editor, {
          at: endRef.current,
          hanging: true,
          voids: voids
        });
      }

      var point = reverse ? startRef.unref() || endRef.unref() : endRef.unref() || startRef.unref();

      if (options.at == null && point) {
        Transforms.select(editor, point);
      }
    });
  },

  /**
   * Insert a fragment at a specific location in the editor.
   */
  insertFragment: function insertFragment(editor, fragment) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, function () {
      var _options$hanging2 = options.hanging,
          hanging = _options$hanging2 === void 0 ? false : _options$hanging2,
          _options$voids2 = options.voids,
          voids = _options$voids2 === void 0 ? false : _options$voids2;
      var _options$at2 = options.at,
          at = _options$at2 === void 0 ? editor.selection : _options$at2;

      if (!fragment.length) {
        return;
      }

      if (!at) {
        return;
      } else if (Range.isRange(at)) {
        if (!hanging) {
          at = Editor.unhangRange(editor, at);
        }

        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var _Range$edges5 = Range.edges(at),
              _Range$edges6 = _slicedToArray(_Range$edges5, 2),
              end = _Range$edges6[1];

          if (!voids && Editor["void"](editor, {
            at: end
          })) {
            return;
          }

          var pointRef = Editor.pointRef(editor, end);
          Transforms["delete"](editor, {
            at: at
          });
          at = pointRef.unref();
        }
      } else if (Path.isPath(at)) {
        at = Editor.start(editor, at);
      }

      if (!voids && Editor["void"](editor, {
        at: at
      })) {
        return;
      } // If the insert point is at the edge of an inline node, move it outside
      // instead since it will need to be split otherwise.


      var inlineElementMatch = Editor.above(editor, {
        at: at,
        match: function match(n) {
          return Editor.isInline(editor, n);
        },
        mode: 'highest',
        voids: voids
      });

      if (inlineElementMatch) {
        var _inlineElementMatch = _slicedToArray(inlineElementMatch, 2),
            _inlinePath = _inlineElementMatch[1];

        if (Editor.isEnd(editor, at, _inlinePath)) {
          var after = Editor.after(editor, _inlinePath);
          at = after;
        } else if (Editor.isStart(editor, at, _inlinePath)) {
          var before = Editor.before(editor, _inlinePath);
          at = before;
        }
      }

      var blockMatch = Editor.above(editor, {
        match: function match(n) {
          return Editor.isBlock(editor, n);
        },
        at: at,
        voids: voids
      });

      var _blockMatch = _slicedToArray(blockMatch, 2),
          blockPath = _blockMatch[1];

      var isBlockStart = Editor.isStart(editor, at, blockPath);
      var isBlockEnd = Editor.isEnd(editor, at, blockPath);
      var mergeStart = !isBlockStart || isBlockStart && isBlockEnd;
      var mergeEnd = !isBlockEnd;

      var _Node$first = Node.first({
        children: fragment
      }, []),
          _Node$first2 = _slicedToArray(_Node$first, 2),
          firstPath = _Node$first2[1];

      var _Node$last = Node.last({
        children: fragment
      }, []),
          _Node$last2 = _slicedToArray(_Node$last, 2),
          lastPath = _Node$last2[1];

      var matches = [];

      var matcher = function matcher(_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            n = _ref4[0],
            p = _ref4[1];

        if (mergeStart && Path.isAncestor(p, firstPath) && Element.isElement(n) && !editor.isVoid(n) && !editor.isInline(n)) {
          return false;
        }

        if (mergeEnd && Path.isAncestor(p, lastPath) && Element.isElement(n) && !editor.isVoid(n) && !editor.isInline(n)) {
          return false;
        }

        return true;
      };

      var _iterator2 = _createForOfIteratorHelper$6(Node.nodes({
        children: fragment
      }, {
        pass: matcher
      })),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var entry = _step2.value;

          if (entry[1].length > 0 && matcher(entry)) {
            matches.push(entry);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var starts = [];
      var middles = [];
      var ends = [];
      var starting = true;
      var hasBlocks = false;

      for (var _i2 = 0, _matches = matches; _i2 < _matches.length; _i2++) {
        var _matches$_i = _slicedToArray(_matches[_i2], 1),
            node = _matches$_i[0];

        if (Element.isElement(node) && !editor.isInline(node)) {
          starting = false;
          hasBlocks = true;
          middles.push(node);
        } else if (starting) {
          starts.push(node);
        } else {
          ends.push(node);
        }
      }

      var _Editor$nodes = Editor.nodes(editor, {
        at: at,
        match: function match(n) {
          return Text.isText(n) || Editor.isInline(editor, n);
        },
        mode: 'highest',
        voids: voids
      }),
          _Editor$nodes2 = _slicedToArray(_Editor$nodes, 1),
          inlineMatch = _Editor$nodes2[0];

      var _inlineMatch = _slicedToArray(inlineMatch, 2),
          inlinePath = _inlineMatch[1];

      var isInlineStart = Editor.isStart(editor, at, inlinePath);
      var isInlineEnd = Editor.isEnd(editor, at, inlinePath);
      var middleRef = Editor.pathRef(editor, isBlockEnd ? Path.next(blockPath) : blockPath);
      var endRef = Editor.pathRef(editor, isInlineEnd ? Path.next(inlinePath) : inlinePath);
      Transforms.splitNodes(editor, {
        at: at,
        match: function match(n) {
          return hasBlocks ? Editor.isBlock(editor, n) : Text.isText(n) || Editor.isInline(editor, n);
        },
        mode: hasBlocks ? 'lowest' : 'highest',
        voids: voids
      });
      var startRef = Editor.pathRef(editor, !isInlineStart || isInlineStart && isInlineEnd ? Path.next(inlinePath) : inlinePath);
      Transforms.insertNodes(editor, starts, {
        at: startRef.current,
        match: function match(n) {
          return Text.isText(n) || Editor.isInline(editor, n);
        },
        mode: 'highest',
        voids: voids
      });
      Transforms.insertNodes(editor, middles, {
        at: middleRef.current,
        match: function match(n) {
          return Editor.isBlock(editor, n);
        },
        mode: 'lowest',
        voids: voids
      });
      Transforms.insertNodes(editor, ends, {
        at: endRef.current,
        match: function match(n) {
          return Text.isText(n) || Editor.isInline(editor, n);
        },
        mode: 'highest',
        voids: voids
      });

      if (!options.at) {
        var path;

        if (ends.length > 0) {
          path = Path.previous(endRef.current);
        } else if (middles.length > 0) {
          path = Path.previous(middleRef.current);
        } else {
          path = Path.previous(startRef.current);
        }

        var _end2 = Editor.end(editor, path);

        Transforms.select(editor, _end2);
      }

      startRef.unref();
      middleRef.unref();
      endRef.unref();
    });
  },

  /**
   * Insert a string of text in the Editor.
   */
  insertText: function insertText(editor, text) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, function () {
      var _options$voids3 = options.voids,
          voids = _options$voids3 === void 0 ? false : _options$voids3;
      var _options$at3 = options.at,
          at = _options$at3 === void 0 ? editor.selection : _options$at3;

      if (!at) {
        return;
      }

      if (Path.isPath(at)) {
        at = Editor.range(editor, at);
      }

      if (Range.isRange(at)) {
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var end = Range.end(at);

          if (!voids && Editor["void"](editor, {
            at: end
          })) {
            return;
          }

          var pointRef = Editor.pointRef(editor, end);
          Transforms["delete"](editor, {
            at: at,
            voids: voids
          });
          at = pointRef.unref();
          Transforms.setSelection(editor, {
            anchor: at,
            focus: at
          });
        }
      }

      if (!voids && Editor["void"](editor, {
        at: at
      })) {
        return;
      }

      var _at = at,
          path = _at.path,
          offset = _at.offset;
      if (text.length > 0) editor.apply({
        type: 'insert_text',
        path: path,
        offset: offset,
        text: text
      });
    });
  }
};

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Transforms = _objectSpread$9(_objectSpread$9(_objectSpread$9(_objectSpread$9({}, GeneralTransforms), NodeTransforms), SelectionTransforms), TextTransforms);

exports.Editor = Editor;
exports.Element = Element;
exports.Location = Location;
exports.Node = Node;
exports.Operation = Operation;
exports.Path = Path;
exports.PathRef = PathRef;
exports.Point = Point;
exports.PointRef = PointRef;
exports.Range = Range;
exports.RangeRef = RangeRef;
exports.Span = Span;
exports.Text = Text;
exports.Transforms = Transforms;
exports.createEditor = createEditor;
//# sourceMappingURL=index.js.map
