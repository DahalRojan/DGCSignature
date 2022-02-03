from fastapi import FastAPI, Request, Form, APIRouter
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

router = APIRouter()
templates = Jinja2Templates(directory="templates/")

@router.get("/verifier", response_class=HTMLResponse)
def get_comparer(request: Request):
    return templates.TemplateResponse("verifier.html", context={'request': request})