const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('frm_usr_laporan', {
    id_laporan_tugas: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usr_tugas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'frm_usr_tugas',
        key: 'id_user_tugas'
      }
    },
    id_auth: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    keterangan: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    upload_image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tgl_lapor: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'frm_usr_laporan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_laporan_tugas" },
        ]
      },
      {
        name: "id_tugas",
        using: "BTREE",
        fields: [
          { name: "id_usr_tugas" },
        ]
      },
    ]
  });
};
