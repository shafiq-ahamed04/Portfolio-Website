import os
from PIL import Image, ImageDraw, ImageFont

def create_terminal_gif():
    # Final dimensions
    W, H = 880, 420
    scale = 2
    RW, RH = W * scale, H * scale

    font_regular = ImageFont.truetype("C:/Windows/Fonts/consola.ttf", 13.5 * scale)
    font_bold = ImageFont.truetype("C:/Windows/Fonts/consolab.ttf", 13.5 * scale)
    font_title = ImageFont.truetype("C:/Windows/Fonts/consolab.ttf", 11.5 * scale)
    font_banner = ImageFont.truetype("C:/Windows/Fonts/consolab.ttf", 13 * scale)

    # Colors
    BG_COLOR = (11, 13, 17)          # Deep terminal black
    HEADER_BG = (17, 20, 26)         # Top bar
    BORDER_COLOR = (182, 255, 60)    # Acid green border
    BORDER_DARK = (32, 38, 48)
    TEXT_WHITE = (235, 238, 242)     # Clean bone white
    TEXT_GRAY = (148, 156, 169)      # Muted slate
    TEXT_DOTS = (55, 63, 76)         # Subtle dots
    GREEN_PASSED = (182, 255, 60)    # Neon Acid Green
    BANNER_BG = (16, 26, 14)         # Dark green-charcoal
    CYAN_BLUE = (96, 165, 250)       # Info blue
    YELLOW_WARN = (250, 204, 21)

    # Monospace metrics
    # Consolas is strictly monospaced
    cw = font_regular.getlength("A")
    line_h = 22 * scale
    pad_left = 32 * scale

    def draw_base_window():
        im = Image.new("RGBA", (RW, RH), (0, 0, 0, 0))
        draw = ImageDraw.Draw(im)

        r = 12 * scale
        # Outer border & background
        draw.rounded_rectangle([2 * scale, 2 * scale, RW - 2 * scale, RH - 2 * scale], radius=r, fill=BG_COLOR, outline=BORDER_COLOR, width=int(1.5 * scale))

        # Title bar
        draw.rounded_rectangle([2 * scale, 2 * scale, RW - 2 * scale, 36 * scale], radius=r, fill=HEADER_BG)
        draw.rectangle([2 * scale, 20 * scale, RW - 2 * scale, 36 * scale], fill=HEADER_BG)
        draw.line([2 * scale, 36 * scale, RW - 2 * scale, 36 * scale], fill=BORDER_DARK, width=1 * scale)

        # Traffic lights
        by = 18 * scale
        draw.ellipse([18 * scale, by - 5 * scale, 28 * scale, by + 5 * scale], fill=(255, 95, 86))
        draw.ellipse([34 * scale, by - 5 * scale, 44 * scale, by + 5 * scale], fill=(255, 189, 46))
        draw.ellipse([50 * scale, by - 5 * scale, 60 * scale, by + 5 * scale], fill=(39, 201, 63))

        # Title bar text
        title = "shafiq@qa-runner: ~/portfolio-test-suite (pytest-v9.1.1 · headless-chrome)"
        t_len = font_title.getlength(title)
        draw.text(((RW - t_len) / 2, 11 * scale), title, fill=TEXT_GRAY, font=font_title)

        # Status badge
        badge_x = RW - 65 * scale
        draw.ellipse([badge_x, by - 4 * scale, badge_x + 8 * scale, by + 4 * scale], fill=GREEN_PASSED)
        draw.text((badge_x + 13 * scale, 11 * scale), "LIVE", fill=GREEN_PASSED, font=font_title)

        return im

    tests = [
        ("tests/test_engineer.py::test_fresher_credentials", "PASSED", "[ 14%]"),
        ("tests/test_skills.py::test_selenium_locators_waits", "PASSED", "[ 28%]"),
        ("tests/test_projects.py::test_100_automated_tests", "PASSED", "[ 42%]"),
        ("tests/test_testrun.py::test_screen_recording_video", "PASSED", "[ 57%]"),
        ("tests/test_journey.py::test_discipline_milestones", "PASSED", "[ 71%]"),
        ("tests/test_github.py::test_qa_journey_telemetry", "PASSED", "[ 85%]"),
        ("tests/test_contact.py::test_recruiter_pipeline", "PASSED", "[100%]"),
    ]

    base = draw_base_window()
    frames = []
    durations = []

    # 1. Prompt typing animation
    full_cmd = "pytest -v tests/ --tb=short --chrome-headless"
    # Typed in realistic keystroke chunks
    typed_seq = [
        "",
        "p",
        "py",
        "pyt",
        "pyte",
        "pytest",
        "pytest -v",
        "pytest -v tests/",
        "pytest -v tests/ --tb=",
        "pytest -v tests/ --tb=short",
        full_cmd
    ]

    for step in typed_seq:
        f = base.copy()
        d = ImageDraw.Draw(f)
        y = 52 * scale
        d.text((pad_left, y), "$", fill=GREEN_PASSED, font=font_bold)
        cmd_x = pad_left + 16 * scale
        d.text((cmd_x, y), step, fill=TEXT_WHITE, font=font_regular)
        # Block cursor
        cur_x = cmd_x + font_regular.getlength(step) + 3 * scale
        d.rectangle([cur_x, y + 2 * scale, cur_x + 8 * scale, y + 16 * scale], fill=GREEN_PASSED)

        frames.append(f.convert("RGB"))
        durations.append(90 if step != full_cmd else 300)

    # 2. Enter pressed, session start lines
    f = base.copy()
    d = ImageDraw.Draw(f)
    y1 = 52 * scale
    d.text((pad_left, y1), "$", fill=GREEN_PASSED, font=font_bold)
    d.text((pad_left + 16 * scale, y1), full_cmd, fill=TEXT_WHITE, font=font_regular)

    y2 = 74 * scale
    session_line = "============================= test session starts ============================="
    d.text((pad_left, y2), session_line, fill=TEXT_GRAY, font=font_regular)
    frames.append(f.convert("RGB"))
    durations.append(160)

    # 3. Environment and rootdir
    f = f.copy()
    d = ImageDraw.Draw(f)
    y3 = 95 * scale
    # Platform line
    x = pad_left
    d.text((x, y3), "platform ", fill=TEXT_GRAY, font=font_regular); x += font_regular.getlength("platform ")
    d.text((x, y3), "win32", fill=GREEN_PASSED, font=font_bold); x += font_bold.getlength("win32")
    d.text((x, y3), " -- Python ", fill=TEXT_GRAY, font=font_regular); x += font_regular.getlength(" -- Python ")
    d.text((x, y3), "3.11.8", fill=CYAN_BLUE, font=font_bold); x += font_bold.getlength("3.11.8")
    d.text((x, y3), ", pytest-", fill=TEXT_GRAY, font=font_regular); x += font_regular.getlength(", pytest-")
    d.text((x, y3), "9.1.1", fill=CYAN_BLUE, font=font_bold); x += font_bold.getlength("9.1.1")
    d.text((x, y3), ", selenium-", fill=TEXT_GRAY, font=font_regular); x += font_regular.getlength(", selenium-")
    d.text((x, y3), "4.46.0", fill=CYAN_BLUE, font=font_bold)

    y4 = 116 * scale
    x = pad_left
    d.text((x, y4), "rootdir: ", fill=TEXT_GRAY, font=font_regular); x += font_regular.getlength("rootdir: ")
    d.text((x, y4), "C:\\tests\\shafiq-ahamed-portfolio", fill=TEXT_WHITE, font=font_regular); x += font_regular.getlength("C:\\tests\\shafiq-ahamed-portfolio")
    d.text((x, y4), " | collected ", fill=TEXT_GRAY, font=font_regular); x += font_regular.getlength(" | collected ")
    d.text((x, y4), "7 items", fill=GREEN_PASSED, font=font_bold)

    frames.append(f.convert("RGB"))
    durations.append(220)

    current_frame = f

    # 4. Each test passing sequentially
    test_start_y = 144 * scale
    passed_col_x = pad_left + (57 * cw)
    pct_col_x = pad_left + (67 * cw)

    for i in range(len(tests)):
        f = current_frame.copy()
        d = ImageDraw.Draw(f)

        for j in range(i + 1):
            name, status, pct = tests[j]
            ty = test_start_y + (j * line_h)
            d.text((pad_left, ty), name, fill=TEXT_WHITE, font=font_regular)
            
            # Fill dots between test name and PASSED
            dots_start_x = pad_left + font_regular.getlength(name) + (1 * cw)
            num_dots = int(max(2, (passed_col_x - dots_start_x) / cw))
            dots_str = "·" * num_dots
            d.text((dots_start_x, ty), dots_str, fill=TEXT_DOTS, font=font_regular)

            # Highlight PASSED
            d.text((passed_col_x, ty), status, fill=GREEN_PASSED, font=font_bold)
            d.text((pct_col_x, ty), pct, fill=TEXT_GRAY, font=font_regular)

        frames.append(f.convert("RGB"))
        durations.append(180)
        current_frame = f

    # 5. Summary banner
    f = current_frame.copy()
    d = ImageDraw.Draw(f)
    banner_y = test_start_y + (7 * line_h) + (10 * scale)
    banner_w = RW - (pad_left * 2)

    # Dark green background pill with neon green border
    d.rounded_rectangle([pad_left, banner_y, pad_left + banner_w, banner_y + 30 * scale], radius=6 * scale, fill=BANNER_BG, outline=GREEN_PASSED, width=int(1.5 * scale))

    summary_text = "==================== 7 passed, 0 failed, 0 flaky in 1.28s ===================="
    s_len = font_banner.getlength(summary_text)
    d.text((pad_left + (banner_w - s_len) / 2, banner_y + 6 * scale), summary_text, fill=GREEN_PASSED, font=font_banner)

    # 6. Final prompt line with blinking cursor
    prompt_y = banner_y + 40 * scale

    def make_final_frame(show_cursor):
        fr = f.copy()
        dr = ImageDraw.Draw(fr)
        dr.text((pad_left, prompt_y), "$", fill=GREEN_PASSED, font=font_bold)
        msg = "All test assertions passed. Ready for interview & deployment"
        msg_x = pad_left + 16 * scale
        dr.text((msg_x, prompt_y), msg, fill=TEXT_GRAY, font=font_regular)
        if show_cursor:
            cx = msg_x + font_regular.getlength(msg) + 4 * scale
            dr.rectangle([cx, prompt_y + 2 * scale, cx + 8 * scale, prompt_y + 16 * scale], fill=GREEN_PASSED)
        return fr.convert("RGB")

    # Add blinking cursor frames (stays on screen for ~4 seconds)
    frames.append(make_final_frame(True));  durations.append(600)
    frames.append(make_final_frame(False)); durations.append(450)
    frames.append(make_final_frame(True));  durations.append(600)
    frames.append(make_final_frame(False)); durations.append(450)
    frames.append(make_final_frame(True));  durations.append(1400)

    # Resize with Lanczos to output W, H
    resized = [fr.resize((W, H), Image.Resampling.LANCZOS) for fr in frames]

    out_path = "assets/pytest-terminal-run.gif"
    resized[0].save(
        out_path,
        save_all=True,
        append_images=resized[1:],
        duration=durations,
        loop=0,
        optimize=True
    )
    print(f"Generated {out_path} ({len(resized)} frames, {os.path.getsize(out_path)} bytes)")

if __name__ == "__main__":
    create_terminal_gif()
