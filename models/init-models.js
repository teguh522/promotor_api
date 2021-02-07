var DataTypes = require("sequelize").DataTypes;
var _admin_image = require("./admin_image");
var _auth = require("./auth");
var _frm_create_tugas = require("./frm_create_tugas");
var _frm_usr_laporan = require("./frm_usr_laporan");
var _frm_usr_tugas = require("./frm_usr_tugas");
var _usr_image = require("./usr_image");

function initModels(sequelize) {
  var admin_image = _admin_image(sequelize, DataTypes);
  var auth = _auth(sequelize, DataTypes);
  var frm_create_tugas = _frm_create_tugas(sequelize, DataTypes);
  var frm_usr_laporan = _frm_usr_laporan(sequelize, DataTypes);
  var frm_usr_tugas = _frm_usr_tugas(sequelize, DataTypes);
  var usr_image = _usr_image(sequelize, DataTypes);

  frm_usr_laporan.belongsTo(frm_usr_tugas, { as: "id_usr_tugas_frm_usr_tuga", foreignKey: "id_usr_tugas" });
  frm_usr_tugas.hasMany(frm_usr_laporan, { as: "frm_usr_laporans", foreignKey: "id_usr_tugas" });
  frm_usr_tugas.belongsTo(frm_create_tugas, { as: "id_tugas_frm_create_tuga", foreignKey: "id_tugas" });
  frm_create_tugas.hasMany(frm_usr_tugas, { as: "frm_usr_tugas", foreignKey: "id_tugas" });

  return {
    admin_image,
    auth,
    frm_create_tugas,
    frm_usr_laporan,
    frm_usr_tugas,
    usr_image,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
