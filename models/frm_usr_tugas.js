const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('frm_usr_tugas', {
    id_user_tugas: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_tugas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'frm_create_tugas',
        key: 'id_create_tugas'
      }
    },
    id_auth: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nama_user: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    tgl_submit_user: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: "ENUM('proses','selesai','ditolak')",
      allowNull: false
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    kirim_saldo: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    status_upload_laporan: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'frm_usr_tugas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_user_tugas" },
        ]
      },
      {
        name: "id_auth",
        using: "BTREE",
        fields: [
          { name: "id_auth" },
        ]
      },
      {
        name: "id_tugas",
        using: "BTREE",
        fields: [
          { name: "id_tugas" },
        ]
      },
    ]
  });
};
