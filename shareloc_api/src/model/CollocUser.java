package model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the COLLOC_USER database table.
 * 
 */
@Entity
@Table(name="COLLOC_USER")
@NamedQuery(name="CollocUser.findAll", query="SELECT c FROM CollocUser c")
public class CollocUser implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private CollocUserId id;
	
	@Column(name="admin_collocation")
	private byte adminCollocation;

	public CollocUser() {
	}

	public byte getAdminCollocation() {
		return this.adminCollocation;
	}

	public void setAdminCollocation(byte adminCollocation) {
		this.adminCollocation = adminCollocation;
	}

}