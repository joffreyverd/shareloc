package api.path;

import java.util.HashMap;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.jose4j.json.internal.json_simple.JSONObject;

import api.controleur.UserManager;
import api.model.User;
import api.security.JWTokenUtility;
import api.security.SigninNeeded;

import javax.ws.rs.core.SecurityContext;

@Path("/")
public class Authentification {

	@GET
	@SigninNeeded
	@Path("/whoami")
	@Produces(MediaType.APPLICATION_JSON)
	public Response whoami(@Context SecurityContext security) {
		User user = UserManager.getUserByLogin(security.getUserPrincipal().getName());
		if (user!=null)
			return Response.ok().entity(user).build();
		return Response.status(Status.NO_CONTENT).build();
	}

	@POST
	@Path("/signin")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response signin(JSONObject params) {
		User u = UserManager.login(params.get("login").toString(), params.get("password").toString());

		if (u != null) {
			HashMap<String, Object> data = new HashMap<String, Object>();
			data.put("token",JWTokenUtility.buildJWT(u.getLoginUser()));
			data.put("user",u);
			return Response.ok().entity(data).build();
		}

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
	
	public static List<String> findUserRoles(String user) {
		return null;
	}
}
