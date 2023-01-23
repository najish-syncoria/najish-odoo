# -*- coding: utf-8 -*-
from odoo import http


class MagicButtonClass(http.Controller):
    """
    This class will be inherited and will add methods(Routes) for
    further use


    """

    @http.route("/najish/jobs", auth="public", csrf=False, type="json")
    def index(self, **kw):
        print("Hello test")
        return {"html": "<h1>hello, world</h1>"}
