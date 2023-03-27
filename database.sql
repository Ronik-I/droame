CREATE TABLE Customers (
  id INT NOT NULL IDENTITY(1,1),
  name VARCHAR(255) NOT NULL,
  phone_no VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Shoots (
  id INT NOT NULL IDENTITY(1,1),
  customer_id INT NOT NULL,
  date DATE NOT NULL,
  date_of_shooting DATE NOT NULL,
  total_time_shoot VARCHAR(10) NOT NULL,
  type_of_shot VARCHAR(50) NOT NULL,
  location_of_shoot VARCHAR(255) NOT NULL,
  bill DECIMAL(10, 2) NOT NULL,
  advance_payment DECIMAL(10, 2) NOT NULL,
  dues DECIMAL(10, 2) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id) REFERENCES Customers(id)
);
