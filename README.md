# 🚀 KodesCruz - AI Coding Assistant

![KodesCruz](https://img.shields.io/badge/AI-Powered-blue)
![Python](https://img.shields.io/badge/Python-3.12+-green)
![React](https://img.shields.io/badge/React-18+-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.104+-teal)
![License](https://img.shields.io/badge/License-MIT-yellow)

**KodesCruz** is a comprehensive AI-powered coding assistant that helps developers and students learn, debug, generate, and analyze code efficiently. Built with modern technologies and powered by Groq's lightning-fast AI models, featuring real-time collaborative coding with voice chat.

**Live Demo**: [Frontend](https://kodes-cruxx.vercel.app) | [Backend API](https://kodescruz.onrender.com)

---

## ✨ Features

### 🎓 Learning Tools
- **📖 Code Explanation**: Get clear, beginner-friendly explanations of programming concepts
- **🗺 Learning Roadmaps**: Personalized learning paths tailored to your level
- **💡 Project Ideas**: Innovative project suggestions for hands-on practice

### 🛠 Development Tools
- **🔍 Debug Code**: AI-powered bug detection and fixing
- **💡 Code Generation**: Instant code examples and templates
- **🔄 Logic Conversion**: Transform pseudo-code into working code
- **📊 Complexity Analysis**: Analyze time and space complexity
- **🔍 Code Tracer**: Step-by-step execution visualization
- **▶️ Code Playground**: Execute code in 50+ languages with real-time output

### 👥 Collaborative Coding
- **🏠 Collaborative Rooms**: Create or join real-time collaborative coding sessions
- **💬 Real-time Chat**: Text chat with other collaborators in the room, with chat history persistence
- **🎤 Voice Chat**: Real-time voice communication using WebRTC audio streaming
- **👨‍💻 Live Code Editing**: See code changes from other users in real-time with Monaco Editor
- **▶️ Shared Code Execution**: Execute code together with synchronized input/output
- **👥 User Presence**: See who's in the room with color-coded cursors
- **🌐 Public/Private Rooms**: Browse and join public rooms or create private sessions
- **🔐 Authentication**: Secure user accounts with JWT authentication

### 🎨 User Interface
- **🌧️ Dynamic Rain Background**: Beautiful animated rain effect with cursor-following wind and click-triggered lightning
- **🎥 Video Backgrounds**: Support for dynamic video backgrounds on feature cards
- **📚 Snippets Library**: Curated collection of useful code snippets
- **🎯 Multi-language Support**: Python, JavaScript, Java, C++, Go, Rust, and 50+ more
- **🎨 Modern UI**: Clean, responsive interface with glassmorphism and smooth animations
- **📱 Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices

---

## 🏗️ Tech Stack

### Backend
- **FastAPI** - Modern Python web framework with automatic API documentation
- **WebSockets** - Real-time bidirectional communication for collaboration
- **OpenAI** - GPT models via LangChain for AI features
- **SQLAlchemy** - Database ORM for user and room management
- **Pydantic** - Data validation and settings management
- **Uvicorn** - Lightning-fast ASGI server
- **Argon2** - Secure password hashing
- **JWT** - Token-based authentication

### Frontend
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Vite** - Next-generation build tool with HMR
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icons
- **Monaco Editor** - VS Code's editor for syntax highlighting
- **React Markdown** - Markdown rendering for AI responses
- **WebSocket API** - Real-time collaboration
- **MediaRecorder API** - Voice chat functionality

---

## 🚀 Quick Start

### Prerequisites

- Python 3.12 or higher
- Node.js 18+ and npm
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))
- Modern web browser with WebSocket and MediaRecorder API support

### Local Development Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/kodescru-xxx-main.git
cd kodescru-xxx-main
```

#### 2. Backend Setup

**Create Python virtual environment:**
```bash
python -m venv venv

# On macOS/Linux:
source venv/bin/activate

# On Windows:
venv\\Scripts\\activate
```

**Install dependencies:**
```bash
pip install -r requirements.txt
```

**Configure environment variables:**
```bash
# Create .env file in root directory
cp .env.example .env
```

Edit `.env` and add your configuration:
```env
# Required
OPENAI_API_KEY=your_api_key_here

# Optional (defaults shown)
MODEL_NAME=gpt-4o-mini
TEMPERATURE=0.7
MAX_TOKENS=1000
DEBUG=False
LOG_LEVEL=INFO
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
DATABASE_URL=sqlite:///./kodescru.db
SECRET_KEY=your-secret-key-change-in-production
```

**Initialize database:**
```bash
python -c "from database import init_db; init_db()"
```

**Start backend server:**
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

#### 3. Frontend Setup

**Install dependencies:**
```bash
cd frontend
npm install
```

**Configure environment variables:**
```bash
# Create .env file in frontend directory
touch .env
```

Edit `frontend/.env`:
```env
VITE_API_URL=http://localhost:8000
VITE_WS_URL=ws://localhost:8000
VITE_ASSET_BASE_URL=http://localhost:8000
```

**Start development server:**
```bash
npm run dev
```

#### 4. Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs
- **Alternative API Docs**: http://localhost:8000/redoc

---

## 🌐 Deployment

### Deploy to Production

KodesCruxx is optimized for deployment on:
- **Backend**: [Render.com](https://render.com) (Free tier available)
- **Frontend**: [Vercel](https://vercel.com) (Free tier available)

#### Quick Deployment Steps

**1. Deploy Backend to Render:**

1. Create account at [Render.com](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - **Environment**: Python 3
5. Add environment variables (see below)
6. Click "Create Web Service"
7. Copy your backend URL (e.g., `https://your-backend.onrender.com`)

**Required Environment Variables for Render:**
```
OPENAI_API_KEY=sk-your-key-here
MODEL_NAME=gpt-4o-mini
SECRET_KEY=your-secure-random-secret-key
ALLOWED_ORIGINS=https://kodes-cruxx.vercel.app
DATABASE_URL=sqlite:///./kodescru.db
DEBUG=False
LOG_LEVEL=INFO
```

**2. Deploy Frontend to Vercel:**

1. Create account at [Vercel](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add environment variables:
   - `VITE_API_URL` = `https://your-backend.onrender.com`
   - `VITE_WS_URL` = `wss://your-backend.onrender.com`
   - `VITE_ASSET_BASE_URL` = `https://your-backend.onrender.com`
6. Click "Deploy"
7. Copy your Vercel URL

**3. Update Backend CORS:**
- Go back to Render dashboard
- Update `ALLOWED_ORIGINS` to include your Vercel URL
- Service will automatically redeploy

**📚 For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)**

---

## 📁 Project Structure

```
kodescru-xxx-main/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── common/      # Reusable components (FeatureCard, etc.)
│   │   │   ├── layout/      # Layout components (Header, Footer, etc.)
│   │   │   ├── LandingPage.tsx
│   │   │   ├── CollaborativeRoom.tsx
│   │   │   ├── RainBackground.tsx  # Animated rain effect
│   │   │   └── RainBackground.css
│   │   ├── features/        # Feature components (ExplainCode, etc.)
│   │   ├── services/        # API and WebSocket services
│   │   │   ├── api.ts
│   │   │   └── websocket.ts
│   │   ├── context/         # React contexts (AuthContext)
│   │   ├── App.tsx          # Main application component
│   │   ├── index.css        # Global styles
│   │   └── main.tsx         # Application entry point
│   ├── public/              # Static assets
│   ├── vercel.json          # Vercel deployment configuration
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── tsconfig.json
├── images/                  # Background images and videos
├── ai_engine.py            # AI/LLM interactions with OpenAI
├── code_executor.py        # Multi-language code execution engine
├── main.py                 # FastAPI backend with all endpoints
├── websocket_handler.py    # WebSocket message handlers
├── room_manager.py         # Collaborative room management
├── auth.py                 # Authentication and JWT handling
├── database.py             # Database configuration
├── models.py               # SQLAlchemy models (User, Room, ChatMessage)
├── config.py               # Application configuration
├── requirements.txt        # Python dependencies
├── Procfile                # Heroku/Render process file
├── render.yaml             # Render deployment configuration
├── runtime.txt             # Python version specification
├── README.md               # This file
└── DEPLOYMENT.md           # Detailed deployment guide
```

---

## 📡 API Endpoints

### Authentication
- `POST /register` - Register a new user
- `POST /login` - Login and receive JWT token

### AI Features (Streaming)
- `POST /explain` - Explain a coding concept
- `POST /debug` - Debug code
- `POST /generate` - Generate code
- `POST /convert_logic` - Convert logic to code
- `POST /analyze_complexity` - Analyze code complexity
- `POST /trace_code` - Trace code execution
- `POST /get_snippets` - Get code snippets
- `POST /get_projects` - Get project ideas
- `POST /get_roadmaps` - Get learning roadmaps

### Code Execution
- `POST /execute_code` - Execute code in 50+ languages
- `GET /supported_languages` - Get list of supported languages
- `GET /runtimes` - Get detailed runtime information

### Room Management
- `POST /rooms/create` - Create a collaborative room
- `GET /rooms` - List all public rooms
- `GET /rooms/{room_id}` - Get room information
- `GET /rooms/{room_id}/chat` - Get chat history for a room
- `DELETE /rooms/{room_id}` - Delete a room (if empty)

### WebSocket
- `WS /ws/{room_id}` - Real-time collaborative session

### System
- `GET /health` - Health check and LLM status
- `GET /wake` - Wake up service (for free tier)
- `GET /images/{filename}` - Serve background images/videos

**Full API documentation available at**: `http://localhost:8000/docs`

---

## 🔧 Configuration

### Environment Variables

**Backend `.env`:**
```env
# Required
OPENAI_API_KEY=sk-your-api-key-here
SECRET_KEY=your-secret-key-for-jwt

# OpenAI Configuration
MODEL_NAME=gpt-4o-mini
TEMPERATURE=0.7
MAX_TOKENS=1000

# Server Configuration
API_HOST=0.0.0.0
API_PORT=8000
ALLOWED_ORIGINS=http://localhost:5173

# Database
DATABASE_URL=sqlite:///./kodescru.db

# Application Settings
DEBUG=False
LOG_LEVEL=INFO
```

**Frontend `frontend/.env`:**
```env
VITE_API_URL=http://localhost:8000
VITE_WS_URL=ws://localhost:8000
VITE_ASSET_BASE_URL=http://localhost:8000
```

---

## 🐛 Troubleshooting

### Common Issues

**Backend won't start:**
- Ensure Python 3.12+ is installed
- Activate virtual environment
- Install all dependencies: `pip install -r requirements.txt`
- Check OpenAI API key is set in `.env`

**Frontend connection issues:**
- Verify backend is running on port 8000
- Check `VITE_API_URL` in `frontend/.env`
- Clear browser cache and reload

**WebSocket connection fails:**
- Ensure correct `VITE_WS_URL` (use `ws://` for local, `wss://` for production)
- Check firewall settings
- Verify backend WebSocket endpoint is accessible

**Voice chat issues:**
- Grant microphone permissions in browser
- Use HTTPS in production (required for mic access)
- Try Chrome or Firefox for best compatibility

**CORS errors:**
- Add your frontend URL to `ALLOWED_ORIGINS` in backend `.env`
- Ensure no trailing slashes in URLs

### Deployment Issues

**Render backend won't start:**
- Check [Render](https://dashboard.render.com) logs for errors
- Verify all environment variables are set
- Ensure `requirements.txt` is complete

**Vercel build fails:**
- Check Vercel build logs
- Verify `vercel.json` configuration
- Ensure `package.json` scripts are correct

**Free tier limitations:**
- **Render**: Spins down after 15 min inactivity (30s cold start)
- **Vercel**: No limitations for static sites
- Consider upgrading for production workloads

---

## 🧪 Testing

```bash
# Backend tests
pytest tests/

# Frontend tests  
cd frontend
npm test

# Type checking
cd frontend
npm run typecheck
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- OpenAI for GPT models
- LangChain for LLM integration
- FastAPI for the amazing backend framework
- React team for the frontend framework
- Monaco Editor for VS Code-quality code editing
- Piston API for multi-language code execution
- WebSocket technology for real-time collaboration
- The open-source community

---

## 📧 Contact & Support

- **Developer**: PALAK SONI
- **LinkedIn**: [Connect on LinkedIn](https://www.linkedin.com/in/palak-soni-292280288/)
- **Issues**: [GitHub Issues](https://github.com/yourusername/kodescru-xxx-main/issues)
- **Documentation**: See `/docs` endpoint for API documentation

---

**Built with ❤️ using FastAPI, React, WebSockets, and OpenAI**

**Live Demo**: [Try KodesCruz](https://kodes-cruxx.vercel.app)
