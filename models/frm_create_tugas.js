const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('frm_create_tugas', {
    id_create_tugas: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_tugas: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    kategori_tugas: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    nilai_nominal: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    upload_image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    target: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    tgl_awal: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tgl_akhir: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    is_broadcast: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'frm_create_tugas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_create_tugas" },
        ]
      },
    ]
  });
};
