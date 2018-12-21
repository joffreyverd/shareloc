### Route Shareloc API

#### Authentification User :

/signin => POST

Permet de se connecter.

/signup => POST

Permet de s'inscrire.

/whoami => GET

Permet de se reconnecter à la session si le token est toujours valide et disponible.



#### User :

/updateUser => PUT

Permet de mettre à jour son profil utilisateur

/deleteUser => DELETE

Permet de supprimer un utilisateur



#### Collocation :

/createColloc => POST

Permet de créer une collocation.

/updateColloc => PUT

Permet de mettre a jour une collocation.

/deleteColloc => DELETE

Permet de supprimer une collocation.

/getCollocs => GET

Permet de récuperer toutes les collocations au qu'elle on appartient.

/addUserColloc => POST

Permet d'ajouter un user à la collocation quand on est chef de la collocation



#### Service :

/addService => POST

Proposition de vote pour la création du service.

/deleteService => DELETE

Proposition de vote pour la suppresion du service.

/updateService => PUT

Permet de mettre à jour le service.

/voteService => PUT

Permet de voter pour l'ajout d'un service



#### Achieved Service :

/didAchievedService => POST

Permet de dire qu'on a éfféctué le service avec une photo à l'appui.

/validateAchievedService => PUT

Permet de voter pour valider la réalisation du service.



#### Chat :

/chat => POST

Permet de parler entre les membres d'une collocation.



