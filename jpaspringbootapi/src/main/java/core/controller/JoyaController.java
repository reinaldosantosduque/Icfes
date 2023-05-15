package core.controller;

import java.util.HashMap;

import java.util.List;
import java.util.Map;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import core.exception.ResourceNotFoundException;
import core.model.Joya;
import core.repository.JoyaRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class JoyaController {
	@Autowired
	private JoyaRepository joyaRepository;

	@GetMapping("/joyas")
	public List<Joya> getAllJoyas() {
		return joyaRepository.findAll(Sort.by(Order.asc("nombre")));
	}

	@GetMapping("/joyas/{id}")
	public ResponseEntity<Joya> getJoyaById(@PathVariable(value = "id") Long joyaId)
			throws ResourceNotFoundException {
		Joya joya = joyaRepository.findById(joyaId)
				.orElseThrow(() -> new ResourceNotFoundException("item no se encuentra: " + joyaId));
		return ResponseEntity.ok().body(joya);
	}

	@PostMapping("/joyas")
	public Joya createJoya(@Valid @RequestBody Joya joya) {
		System.out.println("Llega a imprimir nombre: " + joya.getNombre());
		return joyaRepository.save(joya);
	}

	@PutMapping("/joyas/{id}")
	public ResponseEntity<Joya> updateJojya(@PathVariable(value = "id") Long joyaId,
			@Valid @RequestBody Joya joyaParam) throws ResourceNotFoundException {
		Joya joya = joyaRepository.findById(joyaId)
				.orElseThrow(() -> new ResourceNotFoundException("item no se encuentra: " + joyaId));

		joya.setNombre(joyaParam.getNombre());
		joya.setMaterial(joyaParam.getMaterial());
		joya.setTipo(joyaParam.getTipo());
		joya.setPrecio(joyaParam.getPrecio());
		joya.setMarca(joyaParam.getMarca());
		joya.setPeso(joyaParam.getPeso());

		final Joya updatedJoya = joyaRepository.save(joya);
		return ResponseEntity.ok(updatedJoya);
	}

	@DeleteMapping("/joyas/{id}")
	public Map<String, Boolean> deleteJoya(@PathVariable(value = "id") Long joyaId)
			throws ResourceNotFoundException {
		Joya joya = joyaRepository.findById(joyaId)
				.orElseThrow(() -> new ResourceNotFoundException("item no se encuentra: " + joyaId));

		joyaRepository.delete(joya);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
