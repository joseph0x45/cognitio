create table if not exists users (
  id text not null primary key,
  username text not null unique,
  password text not null,
  email text not null unique,
  profile_picture text not null default 'https://picsum.photos/200/300',
  user_type text not null default 'regular' -- can be 'regular' or 'admin'
);
