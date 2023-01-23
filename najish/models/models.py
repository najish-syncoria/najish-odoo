# -*- coding: utf-8 -*-

from odoo import models, fields


class najish_notes(models.Model):
    _name = "najish.notes"
    _description = "Notes"

    name = fields.Char("Title", required=True)
    entry = fields.Char("Entry", required=True)
    date_recorded = fields.Date()
    owner_id = fields.Many2one("res.partner", string="Owner")


#
#     @api.depends('value')
#     def _value_pc(self):
#         for record in self:
#             record.value2 = float(record.value) / 100
