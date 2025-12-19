# 🚀 Quick Start Deployment Guide

## TL;DR

Deploy KodesCruxx in 3 steps:
1. **Backend** → Render.com (5 min)
2. **Frontend** → Vercel (2 min)  
3. **Connect** → Update CORS (1 min)

---

## 📦 Backend (Render.com)

### Quick Deploy

1. **Create Web Service** on [Render](https://dashboard.render.com)
2. **Connect GitHub repo**
3. **Configure:**
   - Build: `pip install -r requirements.txt`
   - Start: `uvicorn main:app --host 0.0.0.0 --port $PORT`
4. **Add Secret:**
   - `GROQ_API_KEY` = Get from [Groq Console](https://console.groq.com/keys)
5. **Deploy!**

### Environment Variables

```bash
GROQ_API_KEY=gsk_your_key_here
MODEL_NAME=llama-3.3-70b-versatile
TEMPERATURE=0.7
MAX_TOKENS=2000
ALLOWED_ORIGINS=https://your-app.vercel.app
DEBUG=False
LOG_LEVEL=INFO
```

📋 Copy your backend URL: `https://your-backend.onrender.com`

---

## 🎨 Frontend (Vercel)

### Quick Deploy

1. **Import Project** on [Vercel](https://vercel.com/new)
2. **Set Root Directory:** `frontend`
3. **Add Environment Variables:**
   ```bash
   VITE_API_URL=https://your-backend.onrender.com
   VITE_WS_URL=wss://your-backend.onrender.com
   VITE_ASSET_BASE_URL=https://your-backend.onrender.com
   ```
4. **Deploy!**

📋 Copy your frontend URL: `https://your-app.vercel.app`

---

## 🔗 Final Step

**Update Backend CORS:**
1. Go to Render → Environment
2. Set `ALLOWED_ORIGINS` = `https://your-app.vercel.app`
3. Save (auto-redeploys)

---

## ✅ Test It

- **Backend Health:** `https://your-backend.onrender.com/health`
- **Frontend:** `https://your-app.vercel.app`
- **API Docs:** `https://your-backend.onrender.com/docs`

---

## 🆘 Issues?

- **CORS Error:** Update `ALLOWED_ORIGINS` in Render
- **Backend 404:** Check build logs in Render
- **Frontend Blank:** Check environment variables in Vercel

See full guide in [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**Done! 🎉**
