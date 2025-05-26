import java.util.Scanner;
public class TesterApp{
	public static void main(String[] args){
		Scanner inputData = new Scanner(System.in);
		Authentication auth = new Authentication();
		String username, password, phoneNO;
				
		System.out.print("Enter username: ");
		username = inputData.nextLine();

		System.out.print("Enter password: ");
		password = inputData.nextLine();

		System.out.print("Enter phone number: ");
		phoneNO = inputData.nextLine();	
		try {
            // Register user
            if (auth.register(username, password, phoneNO)) {
                System.out.println("User registered successfully.");
            }
            // Register status check
            if (auth.registerStatus(username, password, phoneNO)) {
                System.out.println("Register status: Success.");
            }
            // Login user
            if (auth.login(username, password)) {
                System.out.println("Login successful.");
            }
            // Login status check
            if (auth.loginStatus(username, password)) {
                System.out.println("Login status: Success.");
            }

        } 
		catch (IllegalArgumentException iae) {
            System.out.println("Error: " + iae.getMessage());
        }
		catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
		finally{
			System.out.println("........");
		}
	}
}