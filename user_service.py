def get_user_role(user):
    return user["role"]

def process_request(request):
    user = request.get("user", {})
    role = get_user_role(user)
    return f"Access granted for {role}"
