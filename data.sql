CREATE TABLE bot(
  id varchar(22),
  username varchar(50),
  shortdesc varchar(22),
  longdesc varchar(22)  ,
  prefix varchar(3) NOT NULL DEFAULT "",
  owner varchar(22) NOT NULL DEFAULT "",
  team TEXT,
  create_at DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  update_at DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  temp_likes INT NOT NULL DEFAULT 0,
  temp_dislike INT NOT NULL DEFAULT 0,
  likes INT NOT NULL DEFAULT 0,
  dislikes INT NOT NULL DEFAULT 0,
  tags TEXT NOT NULL DEFAULT "",
  ispremiun BOOLEAN NOT NULL DEFAULT false,
  iszeew BOOLEAN NOT NULL DEFAULT false,
  iszeewteam BOOLEAN NOT NULL DEFAULT false,
  status BOOLEAN NOT NULL DEFAULT false,
  PRIMARY KEY (`id`)
);

CREATE TABLE `user` (
  id VARCHAR(20) NULL DEFAULT NULL,
  username TEXT NOT NULl DEFAULT '-',
  createdAt DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  information TEXT NOT NULl DEFAULT '-',
  updatedAt DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  last_connection DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  IP TEXT NOT NULl DEFAULT '-',
  PRIMARY KEY (`id`)
)