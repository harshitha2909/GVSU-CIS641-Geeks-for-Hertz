create table appointment (id  bigserial not null, date timestamp not null, doctor int8 not null, patient int8 not null, primary key (id));
create table disease (id int8 not null, name varchar(255) not null, primary key (id));
create table disease_medication_map (id int8 not null, disease int8 not null, medication int8 not null, primary key (id));
create table doctor (id  bigserial not null, name varchar(128) not null, price float8 not null, specialization varchar(45) not null, primary key (id));
create table medication (id int8 not null, name varchar(255) not null, primary key (id));
create table patients (id  bigserial not null, address varchar(128), blood_group varchar(10), email varchar(45) not null, name varchar(128) not null, password varchar(64) not null, phone varchar(10), sex varchar(10), primary key (id));
create table symptom (id int8 not null, name varchar(255) not null, primary key (id));
create table symptom_medication_map (id  bigserial not null, medication int8 not null, symptom int8 not null, primary key (id));

alter table if exists doctor add constraint UK_b3n340es49tci21j3wy7358y0 unique (specialization);
alter table if exists patients add constraint UK_a370hmxgv0l5c9panryr1ji7d unique (email);
alter table if exists appointment add constraint FKdd2ggcc6m2hgy7amgrhf74j3e foreign key (doctor) references doctor;
alter table if exists appointment add constraint FKx3uby0tjxcf1a7m1lo8f2r7p foreign key (patient) references patients;
alter table if exists disease_medication_map add constraint FKrh043mh8c00m6wxf1ary9qd95 foreign key (disease) references disease;
alter table if exists disease_medication_map add constraint FKoag2ugr5i77cl7ho1t5v5hu71 foreign key (medication) references medication;
alter table if exists symptom_medication_map add constraint FK4n5xat21rjvqn90l7br0ywtxk foreign key (medication) references medication;
alter table if exists symptom_medication_map add constraint FK46x14qgedfiydjbtwrvlxt7sa foreign key (symptom) references symptom;


insert into doctor(id, name, specialization, price) values(101, 'john greene', 'cardiologist', 1300);
insert into doctor(id, name, specialization, price) values(102, 'joseph christ', 'physician', 700);
insert into doctor(id, name, specialization, price) values(103, 'james conner', 'emergency medicine', 900);

insert into medication(id, name) values(100, 'Tylenol/Advil');
insert into medication(id, name) values(101, 'Coconut water');
insert into medication(id, name) values(102, 'Yogurt');
insert into medication(id, name) values(103, 'Watermelon and Grapes');

insert into disease(id, name) values(100, 'fever');
insert into disease(id, name) values(101, 'cold');

insert into symptom(id, name) values(100, 'high body temperature');
insert into symptom(id, name) values(101, 'vomiting');


insert into symptom_medication_map(id, medication, symptom) values(100, 100, 100);
insert into symptom_medication_map(id, medication, symptom) values(101, 101, 101);
insert into symptom_medication_map(id, medication, symptom) values(102, 102, 100);
insert into symptom_medication_map(id, medication, symptom) values(103, 103, 101);

insert into disease_medication_map(id, medication, disease) values(100, 100, 100);
insert into disease_medication_map(id, medication, disease) values(101, 100, 101);
insert into disease_medication_map(id, medication, disease) values(102, 101, 100);
insert into disease_medication_map(id, medication, disease) values(103, 102, 100);
insert into disease_medication_map(id, medication, disease) values(104, 103, 101);



