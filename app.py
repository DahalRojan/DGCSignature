import requests
from fastapi import FastAPI, Request, APIRouter, File, UploadFile, requests
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import uvicorn
import os
import shutil

from routers import comparer, checker, verifier


app = FastAPI()

templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory="static"), name="static")

app.include_router(comparer.router)
app.include_router(checker.router)
app.include_router(verifier.router)

@app.get("/")
def home(request: Request):
    return templates.TemplateResponse("index5.html", {"request": request})





