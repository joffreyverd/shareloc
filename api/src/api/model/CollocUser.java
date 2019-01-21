package api.model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the COLLOC_USER database table.
 * 
 */
@Entity
@Table(name="COLLOC_USER")
@NamedQueries({
@NamedQuery(name="CollocUser.findAll", query="SELECT c FROM CollocUser c"),
@NamedQuery(name="CollocUser.getByCollocId", query="SELECT c FROM CollocUser c WHERE c.id.idCollocation= :id"),
@NamedQuery(name="CollocUser.getByUserId", query="SELECT c FROM CollocUser c WHERE c.id.idUser= :id"),
@NamedQuery(name="CollocUser.getAdminColloc", query="SELECT c FROM CollocUser c WHERE c.id.idCollocation= :id AND c.adminCollocation=True")
})
public class CollocUser implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private CollocUserId id;
	
	@Column(name="admin_collocation")
	private Boolean adminCollocation;

	public CollocUser() {
	}

	public Boolean getAdminCollocation() {
		return this.adminCollocation;
	}

	public void setAdminCollocation(Boolean adminCollocation) {
		this.adminCollocation = adminCollocation;
	}

	public CollocUserId getId() {
		return id;
	}

	public void setId(CollocUserId id) {
		this.id = id;
	}

}