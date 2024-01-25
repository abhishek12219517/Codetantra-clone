!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.FitAddon = t() : e.FitAddon = t()
}(self, (function () {
    return (() => {
        "use strict";
        var e = {};
        return (() => {
            var t = e;
            Object.defineProperty(t, "__esModule", {value: !0}), t.FitAddon = void 0, t.FitAddon = class {
                constructor() {
                }

                activate(e) {
                    this._terminal = e
                }

                dispose() {
                }

                fit() {
                    const e = this.proposeDimensions();
                    if (!e || !this._terminal || isNaN(e.cols) || isNaN(e.rows)) return;
                    const t = this._terminal._core;
                    this._terminal.rows === e.rows && this._terminal.cols === e.cols || (t._renderService.clear(), this._terminal.resize(e.cols, e.rows))
                }

                proposeDimensions() {
                    if (!this._terminal) return;
                    if (!this._terminal.element || !this._terminal.element.parentElement) return;
                    const e = this._terminal._core;
                    if (0 === e._renderService.dimensions.actualCellWidth || 0 === e._renderService.dimensions.actualCellHeight) return;
                    const t = 0 === this._terminal.options.scrollback ? 0 : e.viewport.scrollBarWidth,
                        r = window.getComputedStyle(this._terminal.element.parentElement),
                        i = parseInt(r.getPropertyValue("height")),
                        n = Math.max(0, parseInt(r.getPropertyValue("width"))),
                        o = window.getComputedStyle(this._terminal.element),
                        s = i - (parseInt(o.getPropertyValue("padding-top")) + parseInt(o.getPropertyValue("padding-bottom"))),
                        a = n - (parseInt(o.getPropertyValue("padding-right")) + parseInt(o.getPropertyValue("padding-left"))) - t;
                    return {
                        cols: Math.max(2, Math.floor(a / e._renderService.dimensions.actualCellWidth)),
                        rows: Math.max(1, Math.floor(s / e._renderService.dimensions.actualCellHeight))
                    }
                }
            }
        })(), e
    })()
}));
//# sourceMappingURL=xterm-addon-fit.js.map