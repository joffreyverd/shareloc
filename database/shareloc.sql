#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: SERVICE
#------------------------------------------------------------

CREATE TABLE SERVICE(
        id_service     Int  Auto_increment  NOT NULL ,
        name_service   Varchar (25) ,
        score_service  Int ,
        service_statut Int
	,CONSTRAINT SERVICE_PK PRIMARY KEY (id_service)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: USER
#------------------------------------------------------------

CREATE TABLE USER(
        id_user    Int  Auto_increment  NOT NULL ,
        name_user  Varchar (50) ,
        email_user Varchar (50)
	,CONSTRAINT USER_PK PRIMARY KEY (id_user)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: COLLOCATION
#------------------------------------------------------------

CREATE TABLE COLLOCATION(
        id_collocaltion  Int  Auto_increment  NOT NULL ,
        name_collocation Varchar (50)
	,CONSTRAINT COLLOCATION_PK PRIMARY KEY (id_collocaltion)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: VOTE_SERVICE
#------------------------------------------------------------

CREATE TABLE VOTE_SERVICE(
        id_user         Int NOT NULL ,
        id_collocaltion Int NOT NULL ,
        id_service      Int NOT NULL ,
        admin_service   Int
	,CONSTRAINT VOTE_SERVICE_PK PRIMARY KEY (id_user,id_collocaltion,id_service)

	,CONSTRAINT VOTE_SERVICE_USER_FK FOREIGN KEY (id_user) REFERENCES USER(id_user)
	,CONSTRAINT VOTE_SERVICE_COLLOCATION0_FK FOREIGN KEY (id_collocaltion) REFERENCES COLLOCATION(id_collocaltion)
	,CONSTRAINT VOTE_SERVICE_SERVICE1_FK FOREIGN KEY (id_service) REFERENCES SERVICE(id_service)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: COLLOC_USER
#------------------------------------------------------------

CREATE TABLE COLLOC_USER(
        id_collocaltion   Int NOT NULL ,
        id_user           Int NOT NULL ,
        admin_collocation Bool
	,CONSTRAINT COLLOC_USER_PK PRIMARY KEY (id_collocaltion,id_user)

	,CONSTRAINT COLLOC_USER_COLLOCATION_FK FOREIGN KEY (id_collocaltion) REFERENCES COLLOCATION(id_collocaltion)
	,CONSTRAINT COLLOC_USER_USER0_FK FOREIGN KEY (id_user) REFERENCES USER(id_user)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: ACHIEVED_SERVICE
#------------------------------------------------------------

CREATE TABLE ACHIEVED_SERVICE(
        id_service              Int NOT NULL ,
        id_collocaltion         Int NOT NULL ,
        id_user                 Int NOT NULL ,
        beneficiary             Varchar (255) ,
        achieved_service_date   Date ,
        picture                 Varchar (255) ,
        achieved_service_statut Int
	,CONSTRAINT ACHIEVED_SERVICE_PK PRIMARY KEY (id_service,id_collocaltion,id_user)

	,CONSTRAINT ACHIEVED_SERVICE_SERVICE_FK FOREIGN KEY (id_service) REFERENCES SERVICE(id_service)
	,CONSTRAINT ACHIEVED_SERVICE_COLLOCATION0_FK FOREIGN KEY (id_collocaltion) REFERENCES COLLOCATION(id_collocaltion)
	,CONSTRAINT ACHIEVED_SERVICE_USER1_FK FOREIGN KEY (id_user) REFERENCES USER(id_user)
)ENGINE=InnoDB;

