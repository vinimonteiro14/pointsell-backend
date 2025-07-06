const Controller = require('./Controller.js');
const ItemDoPedidosServices = require ('../services/ItemDoPedidosServices.js');

const itemDoPedidosServices = new ItemDoPedidosServices();

class ItemDoPedidosController extends Controller {
    constructor() {
       super(itemDoPedidosServices);
    }
};

module.exports = ItemDoPedidosController;