package api.model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the COLLOCATION database table.
 * 
 */
@Entity
@NamedQuery(name="Collocation.findAll", query="SELECT c FROM Collocation c")
public class Collocation implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_collocation")
	private int idCollocation;

	@Column(name="name_collocation")
	private String nameCollocation;
	
	public Collocation(String name) {
		this.nameCollocation = name;
	}

	public Collocation() {
	}

	public int getIdCollocation() {
		return this.idCollocation;
	}

	public void setIdCollocation(int idCollocation) {
		this.idCollocation = idCollocation;
	}

	public String getNameCollocation() {
		return this.nameCollocation;
	}

	public void setNameCollocation(String nameCollocation) {
		this.nameCollocation = nameCollocation;
	}

}