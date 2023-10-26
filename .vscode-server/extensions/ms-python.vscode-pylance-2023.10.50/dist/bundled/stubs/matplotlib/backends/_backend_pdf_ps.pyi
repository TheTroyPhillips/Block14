from io import BytesIO
from matplotlib._typing import *
from matplotlib.backend_bases import RendererBase
from matplotlib.font_manager import FontProperties

def get_glyphs_subset(fontfile: str, characters: str) -> BytesIO: ...

class CharacterTracker:
    def __init__(self) -> None: ...
    def track(self, font, s: str)-> None: ...
    def track_glyph(self, font, glyph)-> None: ...

class RendererPDFPSBase(RendererBase):
    def __init__(self, width, height) -> None: ...
    def flipy(self) -> bool: ...
    def option_scale_image(self)-> bool: ...
    def option_image_nocomposite(self) -> bool: ...
    def get_canvas_width_height(self)-> tuple[float, float]: ...
    def get_text_width_height_descent(
        self, s: str, prop: FontProperties, ismath: bool
    ) -> tuple[float, float, float]: ...