package core.model;

import jakarta.persistence.*;

@Entity
@Table(name = "joyas")
public class Joya {

	private long id;
	private String nombre;
	private String material;
	private String tipo;
	private String precio;
	private String marca;
	private String peso;

	public Joya(long id, String nombre, String material, String tipo, String precio, String marca, String peso) {
		this.id = id;
		this.nombre = nombre;
		this.material = material;
		this.tipo = tipo;
		this.precio = precio;
		this.marca = marca;
		this.peso = peso;
	}

	public Joya() {

	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	@Column(name = "nombre", nullable = false)
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	@Column(name = "material", nullable = false)
	public String getMaterial() {
		return material;
	}

	public void setMaterial(String material) {
		this.material = material;
	}

	@Column(name = "tipo", nullable = false)
	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	@Column(name = "precio", nullable = false)
	public String getPrecio() {
		return precio;
	}

	public void setPrecio(String precio) {
		this.precio = precio;
	}

	@Column(name = "marca", nullable = false)
	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	@Column(name = "peso", nullable = false)
	public String getPeso() {
		return peso;
	}

	public void setPeso(String peso) {
		this.peso = peso;
	}

	@Override
	public String toString() {

		return "Joya [id=" + id + ",nombre=" + nombre + ",peso=" + peso + ",marca=" + marca + ",tipo=" + tipo
				+ ",material=" + material + ",precio=" + precio + "]";
	}

}
