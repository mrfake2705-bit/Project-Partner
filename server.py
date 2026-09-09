# Lightweight local development server for HackPartner
import http.server
import socketserver
import os
import sys
import webbrowser
import threading

# Ensure UTF-8 output on Windows consoles
if sys.platform.startswith('win'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

PORT = 3000

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS and disable aggressive caching for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def run():
    web_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(web_dir)
    
    port = PORT
    httpd = None
    for p in [3000, 8080, 5000, 8000]:
        try:
            httpd = socketserver.TCPServer(("", p), CustomHandler)
            port = p
            break
        except OSError:
            continue
            
    if not httpd:
        print("Error: Could not bind to any port (3000, 8080, 5000, 8000).")
        return

    with httpd:
        url = f"http://localhost:{port}"
        print("=======================================================")
        print(f"  HackPartner Platform running at: {url}")
        print("  Launching your web browser automatically...")
        print("  Keep this window open while using the website.")
        print("  Press Ctrl+C to stop the server.")
        print("=======================================================")
        
        # Open default browser automatically after 0.8 seconds
        threading.Timer(0.8, lambda: webbrowser.open(url)).start()
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
        except Exception as e:
            print(f"\nServer encountered an error: {e}")

if __name__ == '__main__':
    run()
