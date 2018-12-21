package path;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.jose4j.json.internal.json_simple.JSONObject;

import javax.ws.rs.core.SecurityContext;

import controleur.CollocationManager;
import controleur.UserManager;
import model.User;
import security.JWTokenUtility;
import security.SigninNeeded;

@Path("/")
public class Authentification {

	@GET
	@SigninNeeded
	@Path("/whoami")
	@Produces(MediaType.APPLICATION_JSON)
	public Response whoami(@Context SecurityContext security) {
		User user = UserManager.getUser(security.getUserPrincipal().getName());
		if (user!=null)
			return Response.ok().entity(user).build();
		return Response.status(Status.NO_CONTENT).build();
	}

	@POST
	@Path("/signin")
	@Produces(MediaType.APPLICATION_JSON)
	public Response signin(@QueryParam("login") String login, @QueryParam("password") String password) {
		User u = UserManager.login(login, password);

		if (u != null)
			return Response.ok().entity(JWTokenUtility.buildJWT(u.getLoginUser())).build();

		return Response.status(Status.NOT_ACCEPTABLE).build();
	}

	@POST
	@Path("/signup")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response signup(JSONObject params) {
		if (UserManager.createUser(params.get("login").toString(), params.get("password").toString(),params.get("name").toString(), params.get("email").toString()))
			return Response.status(Status.CREATED).build();
		return Response.status(Status.CONFLICT).build();
	}
	
	
	public Response createCollocation(JSONObject params) {
		if(CollocationManager.createCollocation(params.get("name").toString()))
			return Response.status(Status.CREATED).build();
		return Response.status(Status.CONFLICT).build();
	}
	
	/**
	 * Méthode permettant de récupérer l'ensemble des roles d'un utilisateur
	 * 
	 * @param user l'utilisateur
	 * @return une liste de tous les roles associés à l'utilisateur user
	 */
	public static List<String> findUserRoles(String user) {
		return null;
	}
}
