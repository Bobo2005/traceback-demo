from user_service import process_request

def main():
    request = {"user": {"name": "Alice"}}
    result = process_request(request)
    print(result)

if __name__ == "__main__":
    main()
