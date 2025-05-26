public class AuthenticationApp {

    // Default constructor
    public AuthenticationApp() {
    }

    public boolean checkUserName(String username) throws IllegalArgumentException {
        if (username == null || username.isEmpty()) {
            throw new IllegalArgumentException("Username cannot be null or empty.");
        }
        if (username.contains("_") && username.length() <= 5) {
            return true;
        } else {
            throw new IllegalArgumentException("Username must contain an underscore and be no more than 5 characters long.");
        }
    }

    public boolean checkPasswordComplexity(String password) throws IllegalArgumentException {
        if (password == null || password.isEmpty()) {
            throw new IllegalArgumentException("Password cannot be null or empty.");
        }

        String capital = ".*[A-Z].*";
        String small = ".*[a-z].*";
        String special = ".*[!@#$%^&*(),.?\":{}|<>].*";
        String digit = ".*\\d.*";

        if (password.length() >= 8 &&
            password.matches(capital) &&
            password.matches(small) &&
            password.matches(digit) &&
            password.matches(special)) {
            return true;
        } else {
            throw new IllegalArgumentException("Password must be at least 8 characters and include uppercase, lowercase, digit, and special character.");
        }
    }

    public boolean checkCellPhoneNumber(String phone) throws IllegalArgumentException {
        if (phone == null || phone.length() != 12) {
            throw new IllegalArgumentException("Phone number must be exactly 12 characters long.");
        }

        String saCode = "+27";
        String firstThreeChars = phone.substring(0, 3);
        int fourthDigit = Character.getNumericValue(phone.charAt(3));

        if (firstThreeChars.equals(saCode) && fourthDigit >= 6 && fourthDigit <= 8) {
            return true;
        } else {
            throw new IllegalArgumentException("Phone number must start with +27 and have a valid provider code (6, 7, or 8).");
        }
    }

    public boolean register(String username, String password, String phone) throws IllegalArgumentException {
        if (!checkUserName(username)) {
            throw new IllegalArgumentException("Invalid username during registration.");
        }
        if (!checkPasswordComplexity(password)) {
            throw new IllegalArgumentException("Invalid password during registration.");
        }
        if (!checkCellPhoneNumber(phone)) {
            throw new IllegalArgumentException("Invalid phone number during registration.");
        }
        return true;
    }

    public boolean login(String username, String password) throws IllegalArgumentException {
        if (!checkUserName(username)) {
            throw new IllegalArgumentException("Invalid username during login.");
        }
        if (!checkPasswordComplexity(password)) {
            throw new IllegalArgumentException("Invalid password during login.");
        }
        return true;
    }

	public boolean loginStatus(String username, String password) throws IllegalArgumentException {
		if (login(username, password)) {
			return true;
		} else {
			throw new IllegalArgumentException("Login failed");
		}
	}

    public boolean registerStatus(String username, String password, String phone) throws IllegalArgumentException {
        if (register(username, password, phone)) {
            return true;  
        } else {
            throw new IllegalArgumentException("User registration failed"); 
		}
    }
}