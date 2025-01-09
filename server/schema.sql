create table if not exists users (
  id text not null primary key,
  username text not null unique,
  full_name text not null,
  profile_picture text not null,
  joined_at timestamp not null,
  about text not null default ''
);

create table if not exists admins (
  id serial not null primary key,
  username text not null unique,
  password text not null
);
