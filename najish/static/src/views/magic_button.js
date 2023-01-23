/** @odoo-module **/

import { _lt } from "@web/core/l10n/translation";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { listView } from "@web/views/list/list_view";
import { ListRenderer } from "@web/views/list/list_renderer";
import { ListController } from "@web/views/list/list_controller";

const { Component, useState } = owl;

export class MagicButton extends Component {
  setup() {
    this.notification = useService("notification");
    this.rpc = useService("rpc");
    this.state = useState({
      title: "Magic",
      data: {},
    });
  }

  async dynamicFuncr() {
    alert("Hello");
  }

  async handleMagic() {
    this["dynamicFuncr"]();
    // const rpcdata = await this.rpc("/najish/jobs", {
    //   name: "test",
    // });
    // console.log(rpcdata);
    this.notification.add("A Magic has happened", {
      title: this.state.title,
      type: "info",
      sticky: true,
    });
  }
}

MagicButton.template = "najish.MagicButton";
MagicButton.extractProps = ({ attrs }) => ({
  btnClass: attrs.btnClass || "",
  title: attrs.linkText || _lt("Button"),
});
MagicButton.props = {
  btnClass: { type: String, optional: true },
  title: { type: String, optional: true },
};

// registry.category("view_widgets").add("magic_button", MagicButton);

export class MagicButtonListController extends ListController {
  setup() {
    super.setup();
    this.notification = useService("notification");
    this.state = useState({
      title: "Magic",
    });
  }
}
MagicButtonListController.components = {
  ...ListController.components,
  MagicButton,
};

// export class MagicButtonListRenderer extends ListRenderer {
//   setup() {
//     super.setup();
//   }
// }
// MagicButtonListRenderer.template = "najish.ListRenderer";
// MagicButtonListRenderer.components = {
//   ...ListRenderer.components,
// };

export const MagicButtonListView = {
  ...listView,
  Controller: MagicButtonListController,
  // Renderer: MagicButtonListRenderer,
  buttonTemplate: "najish.ListView.Buttons",
};

registry.category("views").add("najish_tree", MagicButtonListView);
