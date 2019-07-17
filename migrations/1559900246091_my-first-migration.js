exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("user", {
    id: "serial",
    first_name: { type: "varchar(100)", notNull: true },
    last_name: { type: "varchar(100)", notNull: true},
    email: { type: "varchar(100)", notNull: true},
    phone_number: { type: "varchar(100)", notNull: true},
    password: { type: "varchar(100)", notNull: true},
    salt: { type: "varchar(400)", notNull: true}
  });
};

exports.down = (pgm) => {

};
