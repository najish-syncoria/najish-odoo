# -*- coding: utf-8 -*-
{
    "name": "najish",
    "summary": """
        Najish Personal modules for odoo""",
    "description": """
        This is a personal module for personal tools. Its like a dashboard
    """,
    "author": "Najish Mahmud",
    "website": "https://github.com/njayman",
    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/16.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    "category": "Personal/Tools",
    "version": "0.1",
    # any module necessary for this one to work correctly
    "depends": ["base", "sale"],
    # always loaded
    "data": [
        # 'security/ir.model.access.csv',
        "views/views.xml",
        "views/templates.xml",
        "views/snippet.xml",
        "views/sale_order_inherited.xml",
        # najish menu
        "views/najish_menu.xml",
        "security/najish_security.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "najish/static/src/views/magic_button.js",
            "najish/static/src/views/magic_button.xml",
        ],
        "web.assets_qweb": [],
    },
    # only loaded in demonstration mode
    "demo": [
        "demo/demo.xml",
    ],
}
