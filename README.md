# shareloc

Shareloc est une application composée de plusieurs services.
Le client web et le client mobile se connectent tous les deux à l'API pour écriture et lecture dans la base de données

### API

### Client mobile

### Client web

##### Vues :

* Landing page - Accès au formulaire de connexion et d'inscription
* Home page - Accès aux colocations auquelles appartient l'utilisateur
* Colocation page - Accès aux informations relatives à la colocation
* New collocation - Accès au formulaire de création d'une colocation
* New task - Accès au formulaire de création d'une tâche
* New member - Accès au formulaire de création d'une colocataire

##### Composants :

Le client web est architecturé en conteneurs de composants :

* Home - Implémente 'Signin' et 'Signup'
* Collocation - Implémente 'CollocationList' qui implémente lui-même 'CollocationListItem'
* NewCollocationView
* NewTaskView
* NewMemberView
* CollocationView - Implémente :
    * Housemate - Implémente 'HousemateList' qui implémente lui-même 'HousemateListItem'
    * Task - Implémente 'TaskList' qui implémente lui-même 'TaskListItem'
    * Proposal - Implemente 'ProposalList' qui implémente lui-même 'ProposalListItem'
    * AchievedTask - Implémente 'AchievedTaskList' qui implémente lui-même 'AchievedTaskListItem'
    * Scoring - Implémente 'ScoringList' qui implémente lui-même 'ScoringList-Item'
    * Dashboard - Implémente 'MyDashboard' qui implémente lui-même 'DashboardList'


##### Fonctions de connexion à l'API :

La fonction 'request' présente dans le fichier 'httpMethods' permet
d'envoyer une requête de n'importe quel type (post, get, put, delete) avec comme seuls paramètres l'URI,
le body (s'il y en a un), et la methode souhaitée. 'request' utilise la methode 'checkStatus' présente dans 'utils' 
qui va vérifier la réponse renvoyée par le serveur après requête.

##### 'Guides lines' utilisées

* Une variable est nommée en 'camelCase', un fichier contenant une classe commence toujours par une majuscule, 
un fichier n'en contenant pas commence toujours par une minuscule
* Le principe de 'déstructuration' est appliqué dans chaque composant
* Tout fragment de code qui est répété est impriqué dans un conteneur afin de limiter la répétition
* Chaque fonction est commentée
* Les requètes vers l'API sont systématiquement envoyées en JSON, et récupèrent obligatoirement une réponse en JSON
* Les objets JSON récupérés sont imbriqués dans des tableaux, afin de pouvoir s'implémenter dans les composants