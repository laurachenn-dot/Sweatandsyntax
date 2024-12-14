from flask import Blueprint, request, jsonify
from services.auth_service import AuthService

# Define the Blueprint
auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/signup', methods=['POST'])
def signup():
    """
    Handles user signup by creating a new user and storing their details.
    """
    data = request.json
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')
    weight = data.get('weight')
    height = data.get('height')
    age = data.get('age')
    gender = data.get('gender')

    if not username or not password or not email or not weight or not height or not gender:
        return jsonify({"error": "Missing fields"}), 400

    if AuthService.is_logged_in():
        return jsonify({"error": "User already logged in"}), 400

    response, status = AuthService.create_user(
        username=username,
        password=password,
        email=email,
        weight=weight,
        height=height,
        age=age,
        gender=gender
    )
    return jsonify(response), status

@auth_bp.route('/login', methods=['POST'])
def login():
    """
    Handles user login by verifying credentials and starting a session.
    """
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({"error": "Missing username or password"}), 400

    response, status = AuthService.login_user(username, password)
    return jsonify(response), status

@auth_bp.route('/logout', methods=['POST'])
def logout():
    """
    Handles user logout by clearing the session data.
    """
    response, status = AuthService.logout_user()
    return jsonify(response), status

@auth_bp.route('/me', methods=['GET'])
def get_current_user():
    """
    Retrieves the currently logged-in user's details.
    """
    user = AuthService.get_current_user()
    if not user:
        return jsonify({"error": "Not logged in"}), 401

    return jsonify(user), 200