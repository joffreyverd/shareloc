package api.path;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.jose4j.json.internal.json_simple.JSONObject;

import api.controleur.CollocUserManager;
import api.controleur.CollocationManager;
import api.controleur.UserManager;
import api.model.CollocUser;
import api.model.Collocation;
import api.model.User;
import api.security.JWTokenUtility;
import api.security.SigninNeeded;

@Path("/CollocUser")
public class CollocUserPath {
	@SigninNeeded
	@GET
	@Path("/getCollocs/{idUser}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getCollocForUser(@PathParam("idUser") int idUser) {
		List<CollocUser> lcu = CollocUserManager.getAllCollocUser(idUser);
		List<Collocation> lc = CollocationManager.getListColloc(lcu);
		HashMap<String, Object> data = new HashMap<String, Object>();
		for (Collocation cu : lc) {
			data.put("\"id\"",cu.getIdCollocation());
			data.put("\"nameColloc\"",cu.getNameCollocation());
		}
		if(data != null) {
			return Response.ok().entity(data).build();
		}
		else return null;
	}	
	
	@SigninNeeded
	@GET
	@Path("/getUsers/{idColloc}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<String> getUserForColloc(@PathParam("idColloc") int idColloc) {
		List<CollocUser> luc = CollocUserManager.getAllUserColloc(idColloc);
		List<User> lu = UserManager.getListUser(luc);
		List<String> s = new ArrayList<>();
		
		for (User u : lu) {
			s.add(u.getLoginUser());
		}
		if(s != null) return s;
		else return null;	
	}
	
	@POST
	@Path("/addUserToColloc/{idColloc}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response insertUserInColloc(JSONObject params, @PathParam("idColloc") int idColloc) {
		if(CollocUserManager.insertUserInColloc(params.get("login").toString(), idColloc))
			return Response.status(Status.CREATED).build();
		return Response.status(Status.CONFLICT).build();
	}
}
