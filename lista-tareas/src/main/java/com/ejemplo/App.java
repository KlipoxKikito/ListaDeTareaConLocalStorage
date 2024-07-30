package com.ejemplo;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class App {
	private static List<String> tareas = new ArrayList<>();

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		while (true) {
			System.out.println("1. Añadir tarea");
			System.out.println("2. Ver tareas");
			System.out.println("3. Salir");
			System.out.print("Elige una opción: ");
			int opcion = scanner.nextInt();
			scanner.nextLine();  // Consume newline

			switch (opcion) {
				case 1:
					System.out.print("Introduce la tarea: ");
					String tarea = scanner.nextLine();
					tareas.add(tarea);
					break;
				case 2:
					System.out.println("Tareas:");
					for (int i = 0; i < tareas.size(); i++) {
						System.out.println((i + 1) + ". " + tareas.get(i));
					}
					break;
				case 3:
					System.out.println("Saliendo...");
					scanner.close();
					return;
				default:
					System.out.println("Opción no válida");
			}
		}
	}
}